/* DN3008 Generative Art, Ashley Hi 2026
 * Week 5 - Randomness & Noise
 * Noise Shapes
 */

function setup() {
  createCanvas(512, 512);
  frameRate(100);
  noFill();
  stroke(255);
}

function draw() {
  background(0);

  // Uncomment the code to try the different examples.
  // Comment it again before running the next one.

  //=== 1 - square ===
  for (var i = 0; i < 1000; i++) {
    var x = random(200, width - 100);
    var y = random(200, height - 100);
    point(x, y);
  }

  //=== 2 - vertical line ===
  //for (var i = 0; i < 2000; i++) {
  //  var x = random(width/2 - 20, width/2 + 20);
  //  var y = random(0,height);
  //  point(x,y);
  //}

  // === 3 - horizontal line ===
  for (var i = 0; i < 2000; i++) {
    var x = random(0,width);
    var y = random(height/2 - 20, height/2 + 20);
    point(x,y);
  }

  //=== 4 - circle ===
  //translate(width / 2, height / 2);
  //for (var i = 0; i < 2000; i++) {
  //  var dist = (random(-1.0, 1.0) * width) / 2.5;
  //  var angle = random(0, PI * 2);
  //  var p = createVector(cos(angle), sin(angle));
  //  p.mult(dist);
  //  point(p.x, p.y);
  //}

  //=== 5 - wave ===
  //translate(0, height / 2);
  //var amp = 20;
  //for (var i = 0; i < 2000; i++) {
  //  var x = random(0, width);
  //  var y = cos((x / width) * PI * 6) * amp;
  //  y += random(-15, 15);
  //  point(x, y);
  //}
}
