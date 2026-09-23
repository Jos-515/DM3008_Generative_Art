/* DN3008 Generative Art, Ashley Hi 2026
 * Week 6 - Autonomous Agents
 * Particle: Gravity, Lifespan
 * TASK
    Implement Particle.update():
    1. Add this.acc to this.vel        (apply acceleration)
    2. Add this.vel to this.pos        (apply velocity)
    3. Decrease this.lifespan by 3 
 */

let particles = [];
const GRAVITY = 0.15;

function setup() {
  createCanvas(600, 420);
}

function draw() {
  background(15);

  for (let i = 0; i < 2; i++) {
    particles.push(new Particle(width / 2, 40));
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-0.5, 0.5), random(-1, 0));
    this.acc = createVector(0, GRAVITY);
    this.lifespan = 255;
  }

  update() {
    this.vel.add(this.acc); 
    this.pos.add(this.vel);
    this.lifespan -= 3;
  }

  isDead() {
    return this.lifespan <= 0;
  }

  show() {
    noStroke();
    fill(255, this.lifespan);
    circle(this.pos.x, this.pos.y, 8);
  }
}
