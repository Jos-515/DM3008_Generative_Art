/* DM3008 Generative Art, Ashley Hi 2026
 * Week 4 - Waves & Distribution
 * Wave Composition C
*/

var magnify = 300; // how big we want the rose to be
var rotation = 180;
var radius = 50;
var elements = 256; // no. of elements to draw

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  colorMode(HSB);
}
 
function draw() {
  background(0);
    
  radius = map(frameCount - 2, 0, width, 0, 10);
  rotation = map(frameCount / 10, 0, height, 0, 10);
  
  var spacing = TWO_PI/elements; // how far apart each 'node' will be
  translate(width*0.5, height*0.5); // translate the whole sketch to the centre of the screen
  
  for (var i = 0; i < elements ;i++) {
      stroke(i*2, 255, 255);
      fill(random(0, 255), random(0, 255), random(0, 255));
      
      push();
      rotate(spacing * i * rotation);
      translate(sin(spacing*i*radius) * magnify, 0); 
      //comment out the line above and swap for the line below for uneven spacing
      //translate(i * 5 ,0);
      rect(0, 0, random(20, 90), random(10, 20));
      pop();
  }
}