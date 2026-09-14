/* DM3008 Generative Art, Ashley Hi 2026
 * Week 4 - Waves & Distribution
 * Interference Field
 * Two overlapping wave fields added together.
*/

function setup() {
  createCanvas(700, 400);
  noStroke();
}

function draw() {
  background(20);

  for (let x = 0; x < width; x += 6) {
    for (let y = 0; y < height; y += 6) {
      let wave1 = sin(x * 0.05 + frameCount * 0.02);
      let wave2 = sin(y * 0.05 - frameCount * 0.015);

      let combined = wave1 + wave2; // ranges roughly -2 to 2
      let brightness = map(combined, -2, 2, 0, 255);

      fill(brightness, brightness * 0.7, 255);
      rect(x, y, 6, 6);
    }
  }
}