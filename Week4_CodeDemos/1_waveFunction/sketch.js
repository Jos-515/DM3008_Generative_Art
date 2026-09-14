/* DM3008 Generative Art, Ashley Hi 2026
 * Week 4 - Waves & Distribution
 * Wave Function
*/

var amp = 200;
var freq_recip = 2;

function setup() {
  createCanvas(1200,800);
  textSize(20);
}

function draw() {
  background(0);
  strokeWeight(3.0);

  var sin_old = createVector(0, sin(0) * amp);
  var sin_new = createVector(0,0);
  var cos_old = createVector(0, cos(0) * amp);
  var cos_new = createVector(0,0);

  var numDegrees = map(mouseX, 0, width, 0, 360);
  var p = createVector(numDegrees * freq_recip, 0);
  var s = nf(sin(radians(numDegrees)), 1,2);
  var c = nf(cos(radians(numDegrees)), 1,2);

  noStroke();
  fill(255);
  text("numDegrees: " + round(numDegrees), 20, 50);
  text("sin: " + s , 20, 100);
  text("cos: " + c , 20, 150);

  stroke(255);
  noFill();

  push();
  translate(300, height/2 + 100);
  scale(0.75,-0.75);
  fill(255);
  noStroke();
  ellipse(p.x,p.y, 10,10);
  stroke(100);
  line(0,height/2,0,-height/2);
  line(-100,0,width,0);
  stroke(255);

  for (var i = 0; i < numDegrees; i++) {
    sin_new.x = i * freq_recip;
    sin_new.y = sin(radians(i)) * amp;
    cos_new.x = i * freq_recip;
    cos_new.y = cos(radians(i)) * amp;

    stroke(255,0,0);
    line(sin_old.x,sin_old.y, sin_new.x, sin_new.y);
    stroke(0,255,0);
    line(cos_old.x,cos_old.y, cos_new.x, cos_new.y);

    sin_old.set(sin_new);
    cos_old.set(cos_new);
  }
  pop();
}