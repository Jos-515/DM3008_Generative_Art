/* DN3008 Generative Art, Ashley Hi 2026
 * Week 5 - Randomness & Noise
 * Flow Field
 */

let noiseScale = 0.005;
let particles = [];

function setup() {
  createCanvas(600, 600);
  background(245, 240, 230);
  for (let i = 0; i < 400; i++) {
    particles.push(createVector(random(width), random(height)));
  }
}

function draw() {
  for (let p of particles) {
    let angle = noise(p.x * noiseScale, p.y * noiseScale) * TWO_PI * 2;
    let v = p5.Vector.fromAngle(angle);

    stroke(20, 10);
    strokeWeight(1);
    point(p.x, p.y);

    p.add(v);

    if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}
