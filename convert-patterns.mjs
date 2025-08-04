#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define pattern directories
const srcPatternsDir = path.join(__dirname, 'src', 'pages', 'patterns');
const publicPatternsDir = path.join(__dirname, 'public', 'patterns');

// Ensure public patterns directory exists
if (!fs.existsSync(publicPatternsDir)) {
  fs.mkdirSync(publicPatternsDir, { recursive: true });
}

// Function to create Astro page content
function createAstroPageContent(patternName, jsFilePath) {
  return `---
---

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Patterns - ${patternName.charAt(0).toUpperCase() + patternName.slice(1)}</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.11.9/lib/p5.min.js"></script>
    <style>
      body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: left;
        align-items: left;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <script src="${jsFilePath}"></script>
  </body>
</html>`;
}

// Function to process a pattern directory
function processPatternDirectory(dirPath, dirName) {
  const htmlFile = path.join(dirPath, 'index.html');
  const jsFile = path.join(dirPath, 'index.js');
  
  if (fs.existsSync(jsFile)) {
    // Copy JS file to public directory
    const publicPatternDir = path.join(publicPatternsDir, dirName);
    if (!fs.existsSync(publicPatternDir)) {
      fs.mkdirSync(publicPatternDir, { recursive: true });
    }
    
    const publicJsPath = path.join(publicPatternDir, 'index.js');
    fs.copyFileSync(jsFile, publicJsPath);
    
    // Create Astro page
    const astroContent = createAstroPageContent(dirName, `/patterns/${dirName}/index.js`);
    const astroFilePath = path.join(srcPatternsDir, `${dirName}.astro`);
    fs.writeFileSync(astroFilePath, astroContent);
    
    console.log(`✅ Converted ${dirName} pattern to Astro page`);
    
    // Clean up old HTML file
    if (fs.existsSync(htmlFile)) {
      fs.unlinkSync(htmlFile);
      console.log(`🗑️  Removed old HTML file: ${htmlFile}`);
    }
  }
}

// Function to process nested pattern directories
function processNestedPatternDirectory(parentPath, parentName, childName) {
  const fullPath = path.join(parentPath, childName);
  const jsFile = path.join(fullPath, 'index.js');
  
  if (fs.existsSync(jsFile)) {
    // Copy JS file to public directory
    const publicParentDir = path.join(publicPatternsDir, parentName);
    const publicPatternDir = path.join(publicParentDir, childName);
    
    if (!fs.existsSync(publicParentDir)) {
      fs.mkdirSync(publicParentDir, { recursive: true });
    }
    if (!fs.existsSync(publicPatternDir)) {
      fs.mkdirSync(publicPatternDir, { recursive: true });
    }
    
    const publicJsPath = path.join(publicPatternDir, 'index.js');
    fs.copyFileSync(jsFile, publicJsPath);
    
    // Create Astro page with nested path
    const patternDisplayName = `${parentName} ${childName}`;
    const astroContent = createAstroPageContent(patternDisplayName, `/patterns/${parentName}/${childName}/index.js`);
    
    // Create nested directory in pages if it doesn't exist
    const astroParentDir = path.join(srcPatternsDir, parentName);
    if (!fs.existsSync(astroParentDir)) {
      fs.mkdirSync(astroParentDir, { recursive: true });
    }
    
    const astroFilePath = path.join(astroParentDir, `${childName}.astro`);
    fs.writeFileSync(astroFilePath, astroContent);
    
    console.log(`✅ Converted ${parentName}/${childName} pattern to Astro page`);
    
    // Clean up old HTML file
    const htmlFile = path.join(fullPath, 'index.html');
    if (fs.existsSync(htmlFile)) {
      fs.unlinkSync(htmlFile);
      console.log(`🗑️  Removed old HTML file: ${htmlFile}`);
    }
  }
}

// Main conversion process
console.log('🚀 Starting pattern conversion...');

// Read all entries in the patterns directory
const entries = fs.readdirSync(srcPatternsDir, { withFileTypes: true });

for (const entry of entries) {
  if (entry.isDirectory()) {
    const dirPath = path.join(srcPatternsDir, entry.name);
    
    // Check if it's a simple pattern directory (has index.js directly)
    const directJsFile = path.join(dirPath, 'index.js');
    if (fs.existsSync(directJsFile)) {
      processPatternDirectory(dirPath, entry.name);
    } else {
      // Check for nested pattern directories
      const nestedEntries = fs.readdirSync(dirPath, { withFileTypes: true });
      for (const nestedEntry of nestedEntries) {
        if (nestedEntry.isDirectory()) {
          processNestedPatternDirectory(dirPath, entry.name, nestedEntry.name);
        }
      }
    }
  }
}

console.log('✨ Pattern conversion completed!');
console.log('');
console.log('📝 What was done:');
console.log('1. Copied all JavaScript files to public/patterns/ directory');
console.log('2. Created Astro pages (.astro) that will have live reloading');
console.log('3. Removed old HTML files');
console.log('');
console.log('🔥 Your patterns now support live reloading during development!');
