/* DM3008 Generative Art, Ashley Hi 2026
 * Week 4 - Waves & Distribution
 * Even Grid / Field
 * A grid of circles whose size is distributed according to a wave running across the canvas.
*/

let spacing = 40;

function setup() {
  createCanvas(700, 400);
  noStroke();
}

function draw() {
  background(20);
  fill(255, 180, 80);

  for (let x = 0; x <= width; x += spacing) {
    for (let y = 0; y <= height; y += spacing) {
      let wave = sin(x * 0.05 + frameCount * 0.03) * cos(y * 0.05);
      let csize = map(wave, -1, 1, 4, 30);
      circle(x, y, csize);
    }
  }
}