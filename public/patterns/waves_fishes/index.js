//const colors = ['#3772ff', '#df2935']
// const colors = ['#52b69a', '#1a759f']
//const colors = ['#f4978e', '#fbc4ab']
//const colors = ['#a6b1e1', '#fad4c0']
const colors = ['#c0c0c0', '#131b23']

const blockStar = (size, x = 0, y = 0, odd = false) => {
  const ratioX = size / 2.5
  const ratioY = ratioX / 2
  const eyeSize = size / 10

  strokeWeight(1)

  if (!!odd) {
    fill(colors[1])
    stroke(colors[1])
  } else {
    fill(colors[0])
    stroke(colors[0])
  }
  noStroke()
  square(x, y, size)

  if (!!odd) {
    fill(colors[0])
    stroke(colors[0])
  } else {
    fill(colors[1])
    stroke(colors[1])
  }
  arc(x + size / 2, y + size / 2, size, size, radians(180), radians(90))

  if (!!odd) {
    fill(colors[0])
    stroke(colors[0])
  } else {
    fill(colors[1])
    stroke(colors[1])
  }
  square(x, y + size / 2, size / 2)
  stroke(0, 0, 0)

  if (!!odd) {
    fill(colors[0])
    stroke(colors[0])
  } else {
    stroke(colors[1])
    fill(colors[1])
  }
  square(x + size / 2, y + size / 2, size / 4)

  noStroke()
  fill(255)
  circle(x - ratioX, y + ratioY, eyeSize)
  circle(x - ratioX + eyeSize * 2, y + ratioY + eyeSize * 2, eyeSize)
  noFill()

  if (!!odd) {
    fill(colors[1])
    stroke(colors[1])
  } else {
    stroke(colors[0])
    fill(colors[0])
  }
  circle(x - ratioX, y + ratioY, eyeSize / 3)
  circle(x - ratioX + eyeSize * 2, y + ratioY + eyeSize * 2, eyeSize / 3)
  noFill()
}

function setup() {
  const CM_TO_INCH = 2.54
  const WIDTH_CM = 15
  const HEIGHT_CM = 15
  const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
  const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
  const DPI = 300

  const WIDTH = Math.round(WIDTH_INCHES * DPI)
  const HEIGHT = Math.round(HEIGHT_INCHES * DPI)

  createCanvas(WIDTH, HEIGHT)
  background(255)

  const N = 4
  const M = 4
  const size = WIDTH / N

  for (let i = 0; i < N + 1; i++) {
    for (let j = 0; j < M; j++) {
      const odd = (i % 2 != 0 && j % 2 == 0) || (i % 2 == 0 && j % 2 != 0)
      //const odd = j % 2 == 0
      blockStar(size, i * size, j * size, odd)
    }
  }

  // stroke(255)
  // strokeWeight(size / 2)
  // square(size / 4, size / 4, WIDTH - (size / 2))

  // stroke(0)
  // strokeWeight(1)
  // noFill()
  // square(size / 2, size / 2, WIDTH - size)
}