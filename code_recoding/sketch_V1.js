// Goal = Generate a grid of a 200x260 ratio similar to Götz' Density 10: 3: 2: 1
// TEST 1

const squareSide = 1;
const squareSideX = 910;
const squareSideY = 700;

function setup() {
  createCanvas(squareSideX, squareSideY);
  background(255);
  grid();
}

// high density = dark (10)
const dark = 0;
// medium density = medium (3)
const medium = 127;
// low density = bright (2)
const bright = 190;
// very low density = very bright (1)
const veryBright = 255;

// Götz' distribution
const distribution = [dark, dark, dark, dark, dark, dark, dark, dark, dark, dark, medium, medium, medium, bright, bright, veryBright];

// Draws a squareSideX by squareSideY grid, here 700x910
// Every dot of the grid is given a color at random according to Götz' distribution
function grid() {
  noStroke();
  for (let i = 0; i < squareSideX; i++) {
    for (let j = 0; j < squareSideY; j++) {
      fill(random(distribution));
      rect(squareSide * i, squareSide * j, squareSide);
    }
  }
}