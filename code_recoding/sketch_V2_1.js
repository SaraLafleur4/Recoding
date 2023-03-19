// Goal = Generate a grid of a 200x260 ratio similar to Götz' Density 10: 3: 2: 1
// TEST 2, Step 1

const unitSide = 1;
const canvasSideX = 500;
const canvasSideY = 500;

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

// Draws a 4x4 square with a given color dominance
// This square is made up of 16 1x1 squared units
// Each unit is given a color at random according to the square's color dominance
function singleRect(coefX, coefY, distribution) {
  let randomNumbers = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      // Generates a random number from the number of elements in originalDistribution
      let randomnumber2 = parseInt(Math.random() * distribution.length);
      while (randomNumbers.includes(randomnumber2)) {
        randomnumber2 = parseInt(Math.random() * distribution.length);
      }
      randomNumbers.push(randomnumber2);

      let color = distribution[randomnumber2];
      fill(color);

      for (let x = parseInt(canvasSideX * i * 0.25 * 0.25 + canvasSideX * coefX * 0.25); x < canvasSideX * (i + 1) * 0.25 * 0.25 + canvasSideX * coefX * 0.25; x++) {
        for (let y = parseInt(canvasSideX * j * 0.25 * 0.25 + canvasSideY * coefY * 0.25); y < canvasSideY * (j + 1) * 0.25 * 0.25 + canvasSideY * coefY * 0.25; y++) {
          rect(unitSide * x, unitSide * y, unitSide);
        }
      }
    }
  }
}

// Draws a 4x4 grid of squares (definied above) which covers the canvas' surface
// Each square is given a color dominance at random
function grid() {
  noStroke();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      // Generates a random number from the number of elements in originalDistribution
      let randomnumber = parseInt(Math.random() * originalDistribution.length);
      let distribution = originalDistribution[randomnumber];
      originalDistribution.splice(randomnumber, 1);
      singleRect(i, j, distribution);
    }
  }
}