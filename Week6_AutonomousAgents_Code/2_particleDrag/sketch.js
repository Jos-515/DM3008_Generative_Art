/* DN3008 Generative Art, Ashley Hi 2026
 * Week 6 - Autonomous Agents
 * Particle: Wind, Drag
 * TASK
    Implement in Particle.update():
    1. Wind — add (WIND, 0) to this.acc
    2. Drag — after adding acc to vel, multiply this.vel by DRAG 
 */

const GRAVITY = 0.1;
const WIND = 0.03;
const DRAG = 0.995;
let particles = [];

function setup() {
  createCanvas(600, 420);
}

function draw() {
  background(15);

  for (let i = 0; i < 2; i++) {
    particles.push(new Particle(width / 2, height / 2));
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].isDead()) particles.splice(i, 1);
  }

  fill(150);
  noStroke();
  text("press SPACE for an explosion burst", 12, height - 12);
}

function keyPressed() {
  if (key === " ") {
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle(mouseX, mouseY, true));
    }
  }
}

class Particle {
  constructor(x, y, isBurst = false) {
    this.pos = createVector(x, y);
    if (isBurst) {
      this.vel = p5.Vector.random2D().mult(random(2, 6));
    } else {
      this.vel = createVector(random(-0.5, 0.5), random(-1, 0));
    }
    this.acc = createVector(0, 0);
    this.lifespan = 255;
  }

  update() {
    this.acc.add(0, GRAVITY); 
    this.acc.add(WIND, 0); 
    this.vel.add(this.acc);
    this.vel.mult(DRAG); 
  

    this.pos.add(this.vel);
    this.acc.mult(0);
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
