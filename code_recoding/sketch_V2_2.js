// Goal = Generate a grid of a 200x260 ratio similar to Götz' Density 10: 3: 2: 1
// TEST 2, Step 2

const unitSide = 1;
const canvasSideX = 910;
const canvasSideY = 700;

function setup() {
  createCanvas(canvasSideX, canvasSideY);
  background(255);
  grid();
}

// high density = dark (10)
const dark = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 100, 200, 255];

// medium density = medium (3)
const medium = [0, 0, 0, 0, 0, 50, 50, 50, 100, 100, 100, 150, 150, 200, 200, 255];

// low density = bright (2)
const bright = [0, 0, 50, 50, 100, 100, 150, 150, 150, 175, 200, 200, 200, 200, 255, 255];

// very low density = very bright (1)
const veryBright = [0, 0, 50, 50, 100, 100, 150, 150, 175, 175, 200, 200, 255, 255, 255, 255];

// Götz' distribution
const originalDistribution = [dark, dark, dark, dark, dark, dark, dark, dark, dark, dark, medium, medium, medium, bright, bright, veryBright];

// Draws a canvasSideX/4 by canvasSideY/4 rectangle, with a given color dominance
// This rectangle is made up of 1/16th of the canvas' dots
// Each dot is given a color at random according to the rectangle's color dominance
function singleRect(coefX, coefY, distribution) {
  for (let i = 0; i < canvasSideX * 0.25; i++) {
    for (let j = 0; j < canvasSideY * 0.25; j++) {
      // Generates a random number from the number of elements in originalDistribution
      let randomNumber = parseInt(Math.random() * distribution.length);
      let color = distribution[randomNumber];
      fill(color);
      rect(coefX + unitSide * i, coefY + unitSide * j, unitSide);
    }
  }
}

// Draws a 4x4 grid of rectangles (definied above) which covers the canvas' surface
// Each rectangle is drawn individually, and is given a color dominance at random
function grid() {
  noStroke();
  
  // First line of 4 rectangles
  for (let i = 0; i < 4; i++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(0, 0, distribution);
  }

  for (let j = 0; j < 4; j++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(canvasSideX * 0.25, 0, distribution);
  }

  for (let k = 0; k < 4; k++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(canvasSideX * 0.5, 0, distribution);
  }

  for (let l = 0; l < 4; l++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(canvasSideX * 0.75, 0, distribution);
  }

  // Second line of 4 rectangles
  for (let m = 0; m < 4; m++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(0, canvasSideY * 0.25, distribution);
  }

  for (let n = 0; n < 4; n++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(canvasSideX * 0.25, canvasSideY * 0.25, distribution);
  }

  for (let o = 0; o < 4; o++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(canvasSideX * 0.5, canvasSideY * 0.25, distribution);
  }

  for (let p = 0; p < 4; p++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(canvasSideX * 0.75, canvasSideY * 0.25, distribution);
  }

  // Third line of 4 rectangles
  for (let q = 0; q < 4; q++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(0, canvasSideY * 0.5, distribution);
  }

  for (let r = 0; r < 4; r++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(canvasSideX * 0.25, canvasSideY * 0.5, distribution);
  }

  for (let s = 0; s < 4; s++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(canvasSideX * 0.5, canvasSideY * 0.5, distribution);
  }

  for (let t = 0; t < 4; t++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(canvasSideX * 0.75, canvasSideY * 0.5, distribution);
  }

  // Fourth line of 4 rectangles
  for (let u = 0; u < 4; u++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(0, canvasSideY * 0.75, distribution);
  }

  for (let v = 0; v < 4; v++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(canvasSideX * 0.25, canvasSideY * 0.75, distribution);
  }

  for (let w = 0; w < 4; w++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(canvasSideX * 0.5, canvasSideY * 0.75, distribution);
  }

  for (let x = 0; x < 4; x++) {
    let randomNumber = parseInt(Math.random() * originalDistribution.length);
    let distribution = originalDistribution[randomNumber];
    singleRect(canvasSideX * 0.75, canvasSideY * 0.75, distribution);
  }
}
