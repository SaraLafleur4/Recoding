// Goal = Generate a grid of a 200x260 ratio similar to Götz' Density 10: 3: 2: 1
// TEST 3 --- FINAL VERSION

// The unitSide can be changed to any number (feel free to try)
const unitSide = 1;
const canvasPixelSizeX = 910;
const canvasPixelSizeY = 700;

function setup() {
  createCanvas(canvasPixelSizeX, canvasPixelSizeY);
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

// A single rectangle's side lengths
// The rectSizeX and rectSizeY have been chosen to meet the original artwork's ratio
const rectSizeX = 13;
const rectSizeY = 10;
// The next 2 variables convert the rectangle's side lengths into pixels
const rectPixelSizeX = rectSizeX * unitSide;
const rectPixelSizeY = rectSizeY * unitSide;

// Draws a single unit with a given color dominance
function drawUnit(x, y, color) {
  fill(color);
  rect(x, y, unitSide);
}

// Draws a rectangle (according to its characteristic above) with a given color dominance
// This rectangle is made up of rectSizeX by rectSizeY units
// In this case, 10x13, 130 units
// Each unit is given a color at random according to the rectangle's color dominance
function drawRectangle(x, y, distribution) {
  for (let i = 0; i < rectPixelSizeX; i += unitSide) {
    for (let j = 0; j < rectPixelSizeY; j += unitSide) {
      let randomNumber = parseInt(Math.random() * distribution.length);
      let color = distribution[randomNumber];

      drawUnit(x + i, y + j, color);
    }
  }
}

// Draws as many rectangles (definied above) needed to cover the canvas' surface
// Each rectangle is given a color dominance at random
function grid() {
  noStroke();

  const nbRectToDrawX = parseInt(canvasPixelSizeX / rectPixelSizeX) + 1;
  const nbRectToDrawY = parseInt(canvasPixelSizeY / rectPixelSizeY) + 1;

  console.log("Number of rectangles to draw on the x axis: " + nbRectToDrawX + " (canvasPixelSizeX: " + canvasPixelSizeX + ", rectSizeX: " + rectSizeX + ", unitSide: " + unitSide + ")");
  console.log("Number of rectangles to draw on the y axis: " + nbRectToDrawY + " (canvasPixelSizeY: " + canvasPixelSizeY + ", rectSizeY: " + rectSizeY + ", unitSide: " + unitSide + ")");

  for (let x = 0; x < nbRectToDrawX * rectPixelSizeX; x += rectPixelSizeX) {
    for (let y = 0; y < nbRectToDrawY * rectPixelSizeY; y += rectPixelSizeY) {
      // Generates a random number from the number of elements in originalDistribution
      let randomNumber = parseInt(Math.random() * originalDistribution.length);

      // The top left quarter will have a lesser chance of getting "dark" as color dominance
      if (x < canvasPixelSizeX / 2 && y < canvasPixelSizeY / 2) {
        if (randomNumber < originalDistribution.length / 2) {
          randomNumber += 7;
        }
      }

      let distribution = originalDistribution[randomNumber];

      drawRectangle(x, y, distribution);
    }
  }
}