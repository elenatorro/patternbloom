// const colors = ['#dad7cd', '#344e41', '#588157', '#a3b18a']
//const colors = ['#8C7D8A', '#34345B', '#4a4e69', '#22223b']
// const colors = ['#dad7cd', '#344e41', '#588157', '#a3b18a']
// const colors = ['#001219', '#005f73', '#0a9396', '#94d2bd', '#e9d8a6', '#ee9b00', '#ca6702', '#bb3e03', '#ae2012', '#9b2226' ]
//  const colors = ['#231942', '#5e548e', '#9f86c0', '#be95c4', '#e0b1cb']
const colors = ['#1a6646', '#99cca2', '#7badcc', '#344373', '#6f4b73', '#cc8070', '#c45631', '#9e1c18']
//const colors = ['#141414', '#f8f4f9', '#98ce00', '#9d8af9', '#6e48c3']

const USE_COLORS = true

const flower1 = (size, x = 0, y = 0, r = 0) => {
  strokeWeight(1)
  stroke(0, 0, 0)
  fill(255)

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(45))
  ellipse(0, 0, size, size / 5)
  pop()

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(-45))
  ellipse(0, 0, size, size / 5)
  pop()

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(180))
  ellipse(0, 0, size, size / 5)
  pop()


  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(90))
  ellipse(0, 0, size, size / 5)
  pop()

  circle(x + size / 2, y + size / 2, size / 3)
}

const flower2 = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    noStroke()
    fill(colors[0])
  } else {
    strokeWeight(1)
    stroke(0, 0, 0)
  }

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(45 / 2))
  ellipse(0, 0, size / 1.2, size / 5)
  pop()


  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(45 * 1.5))
  ellipse(0, 0, size / 1.2, size / 5)
  pop()

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(-45 / 2))
  ellipse(0, 0, size / 1.2, size / 5)
  pop()

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(45 * -1.5))
  ellipse(0, 0, size / 1.2, size / 5)
  pop()

  fill(255)

  // level 2

  if (USE_COLORS) {
    fill(colors[1])
  }

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(180))
  ellipse(0, 0, size, size / 5)
  pop()

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(90))
  ellipse(0, 0, size, size / 5)
  pop()

  fill(255)

  // level 3

  if (USE_COLORS) {
    fill(colors[3])
  }

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(45))
  ellipse(0, 0, size, size / 5)
  pop()

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(-45))
  ellipse(0, 0, size, size / 5)
  pop()

  fill(255)

  if (USE_COLORS) {
    fill(colors[2])
  }

  circle(x + size / 2, y + size / 2, size / 4)

  fill(255)

  strokeWeight(1)
  stroke(0, 0, 0)
}

const flower3 = (size, x = 0, y = 0, r = 0) => {
  const ratio = 2
  const sizeA = size / ratio
  const sizeB = size / (ratio * 2)

  if (USE_COLORS) {
    noStroke()
    fill(random(colors))
  } else {
    strokeWeight(1)
    fill(255)
    stroke(0, 0, 0)
  }

  push()
  translate(x + size / 2, y + size / 4)
  arc(0, 0, size / ratio, size / ratio, radians(-180), radians(0))
  pop()

  push()
  translate(x + size / 4, y + size / 2)
  arc(0, 0, size / ratio, size / ratio, radians(90), radians(-90))
  pop()

  push()
  translate((x + size) - size / 4, y + size / 2)
  arc(0, 0, size / ratio, size / ratio, radians(-90), radians(90))
  pop()

  push()
  translate(x + size / 2, (y + size) - size / 4)
  arc(0, 0, size / ratio, size / ratio, radians(0), radians(180))
  pop()

  if (USE_COLORS) {
    strokeWeight(1)
    stroke(colors[0])
    square(x + size / 4, y + size / 4, size / ratio)
  }

  if (USE_COLORS) {
    noStroke()
    fill(colors[3])
  }

  //circle(x + size / 2, y + size / 2, size / 2)

  if (USE_COLORS) {
    noStroke()
    fill(colors[0])
  }

  circle(x + size / 2, y + size / 2, size / 3)

  if (USE_COLORS) {
    noStroke()
    fill(colors[1])
  }

  circle(x + size / 2, y + size / 2, size / 5)
}

const flower4 = (size, x = 0, y = 0) => {
  const r1 = size / 4
  const r2 = size / 10

  strokeWeight(1)
  stroke(0, 0, 0)
  fill(255)

  const x1 = x + size / 4 + size / 15
  const y1 = y + size / 4 + size / 15
  const x2 = x1 + (r1 - r2) / sqrt(2)
  const y2 = y1 + (r1 - r2) / sqrt(2)
  const x3 = x + size - size / 3
  const y3 = y + size / 4 + size / 15
  const x4 = x3 - (r1 - r2) / sqrt(2)
  const y4 = y3 + (r1 - r2) / sqrt(2)
  const x5 = x3
  const y5 = y + size - size / 3
  const x6 = x5 - (r1 - r2) / sqrt(2)
  const y6 = y5 - (r1 - r2) / sqrt(2)
  const x7 = x1
  const y7 = y5
  const x8 = x7 + (r1 - r2) / sqrt(2)
  const y8 = y7 - (r1 - r2) / sqrt(2)

  ellipse(x3, y3, r1 * 2, r1 * 2)
  // ellipse(x4, y4, r2 * 2, r2 * 2)

  ellipse(x7, y7, r1 * 2, r1 * 2)
  // ellipse(x8, y8, r2 * 2, r2 * 2)

  ellipse(x1, y1, r1 * 2, r1 * 2)
  ellipse(x2, y2, r2 * 2, r2 * 2)

  ellipse(x5, y5, r1 * 2, r1 * 2)
  ellipse(x6, y6, r2 * 2, r2 * 2)

  //circle(x + size / 2, y + size / 2, size / 12)
}

const flower5 = (size, x = 0, y = 0, petals = 12) => {
  if (USE_COLORS) {
    noStroke()
    fill(colors[2])
  } else {
    strokeWeight(1)
    stroke(0, 0, 0)
    fill(255)
  }

  push()
  translate(x + size / 2, y + size / 2)
  for (let i = 0; i < petals; i++) {
    push()
    rotate(i)
    bezier(
      0, 0,
      0, size / 2,
      size / 2, size / 2,
      0, 0
    )
    pop()
  }
  pop()
  //noFill()

  //circle(x + size / 2, y + size / 2, size / petals)
}

const flower6 = (size, x = 0, y = 0) => {
  if (USE_COLORS) {
    noStroke()
    fill(random(colors))
  } else {
    strokeWeight(1)
    stroke(0, 0, 0)
    fill(255)
  }

  push()
  translate(x + size / 2, y + size / 2)

  for (let i = 0; i < 6; i++) {
    push()
    rotate(-i)

    bezier(
      0, 0,
      -size / 2, size / 2,
      size / 2, size / 2,
      0, 0
    )
    // bezier(
    //   0, 0,
    //   0, size / 1.2,
    //   size / 1.2, 0,
    //   0, 0
    // )
    pop()
  }

  // for (let i = 0; i < 6; i++) {
  //   push()
  //   rotate(i)
  //   bezier(
  //     0, 0,
  //     0, size / 2,
  //     size / 2, 0,
  //     0, 0
  //   )
  //   pop()
  // }
  pop()

  if (USE_COLORS) {
    fill(colors[1])
  } else {
    fill(255)
  }

  circle(x + size / 2, y + size / 2, size / 5)
}

const flower7 = (size, x = 0, y = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    stroke(0, 0, 0)
    strokeWeight(15)
    //noStroke()
  } else {
    strokeWeight(1)
    stroke(0, 0, 0)
    strokeWeight(10)
    fill(255)
  }

  const petal_radius = size / 1.5
  push()
  translate(x + size / 2, y + size / 1.5)
  push()
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  push()
  rotate(1)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  push()
  rotate(-1)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  push()
  rotate(0.5)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  push()
  rotate(-0.5)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  pop()
  noFill()
}

const flower8 = (size, x = 0, y = 0, kind = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    //stroke(0, 0, 0)
    noStroke()
  } else {
    strokeWeight(1)
    stroke(0, 0, 0)
    fill(255)
  }

  const petal_radius = size / 1.5
  push()
  translate(x + size / 2, y + size)
  rotate(kind)
  push()
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  push()
  rotate(0.65)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  push()
  rotate(-0.65)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  pop()
  noFill()
}

// p5.js sketch to create a flower pattern
function setup() {
  const CM_TO_INCH = 2.54
  const WIDTH_CM = 15
  const HEIGHT_CM = 15
  const MARGIN_CM = 0.1
  const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
  const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
  const MARGIN_INCHES = MARGIN_CM / CM_TO_INCH
  const DPI = 300

  const WIDTH = Math.round(WIDTH_INCHES * DPI)
  const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
  const MARGIN = Math.round(MARGIN_CM * DPI)

  createCanvas(WIDTH + MARGIN, HEIGHT + MARGIN)

  if (USE_COLORS) {
    // background(colors[3])
    // background(random(colors))
  } else {
    background(255)
  }

  const N = 5
  const M = 5
  const size = ((WIDTH - MARGIN) / N)

  // Flowers Pattern 1
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if ((i % 2 != 0 && j % 2 == 0) || (i % 2 == 0 && j % 2 != 0)) {
        flower7(size, i * size + MARGIN, j * size + MARGIN)
      } else {
        flower7(size, i * size + MARGIN, j * size + MARGIN)
      }
    }
  }

  // stroke(255)
  // strokeWeight(size / 2)
  // noFill()
  // square(size / 4, size / 4, WIDTH - (size / 2))

  stroke(0)
  strokeWeight(0)
  noFill()
  square(0, 0, WIDTH + MARGIN)

  //   for (let i = 0; i < N; i++) {
  //     for (let j = 0; j < M; j++) {
  //         flower3(size, i * size, j * size)
  //     }
  //   }
}