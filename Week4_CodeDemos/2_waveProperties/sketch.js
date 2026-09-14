/* DM3008 Generative Art, Ashley Hi 2026
 * Week 4 - Waves & Distribution
 * Wave Properties
*/

let amplitude = 100;   // how tall the wave is
let frequency = 0.05;  // how squeezed the waves are
let phase = 0;         // shifts the wave left/right

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(20);
  stroke(255);
  noFill();

  beginShape();
  for (let x = 0; x < width; x++) {
    let y = height / 2 + amplitude * sin(frequency * x + phase);
    vertex(x, y);
  }
  endShape();
}