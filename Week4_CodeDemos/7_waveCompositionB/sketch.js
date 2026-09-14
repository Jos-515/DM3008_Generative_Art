/* DM3008 Generative Art, Ashley Hi 2026
 * Week 4 - Waves & Distribution
 * Wave Composition B
*/

var magnify = 300; 
var rotation = 0; 
var radius = 0; 
var elements = 256;

function setup() {
  createCanvas(800, 800);
}
 
function draw() {
  background(0);
  elements = 500; 
  radius = (cos(frameCount * 0.0013) + 2) * 10;
  rotation = (sin(frameCount * 0.0011) + 1) * 10;
  
  var spacing = TWO_PI / elements; 
  translate(width * 0.5, height * 0.5);
  noFill();
  stroke(255);
  
  beginShape();
  
  for (var i = 0; i < 256; i++) {
      var p = createVector(0,0);
      p.add(sin(spacing * i * radius) * magnify, 0);
      p.rotate(spacing * i * rotation);
      vertex(p.x, p.y);
  }
  
  endShape();
}