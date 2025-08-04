const blockStar = (size, x = 0, y = 0, r = 0) => {
  r = r != 0 ? r : size

  noFill()
  strokeWeight(1)
  stroke(0, 0, 0)
  arc(x, y, r, r, 0, HALF_PI)
  arc(x, y + size, r, r, HALF_PI, -HALF_PI)
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

  const N = 9
  const M = 9
  const size = WIDTH / N

  for (let i = 0; i < N + 1; i++) {
    for (let j = 0; j < M; j++) {
      blockStar(size, i * size, j * size)
    }
  }

  stroke(255)
  strokeWeight(size / 2)
  square(size / 4, size / 4, WIDTH - (size / 2))

  stroke(0)
  strokeWeight(1)
  noFill()
  square(size / 2, size / 2, WIDTH - size)
}