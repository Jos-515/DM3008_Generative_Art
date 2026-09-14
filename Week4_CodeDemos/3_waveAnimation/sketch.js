/* DM3008 Generative Art, Ashley Hi 2026
 * Week 4 - Waves & Distribution
 * Wave Animation
*/

var numCircles = 20;
var amplitude = 100; 
var phase = 0;
var speed = 1; // how fast to move through the sine function

function setup() {
  createCanvas(500, 500);
  frameRate(60);
  phase = 12; // how spread out the particles are
}


function draw() {
  background(0);
  fill(255);
  translate(width/2, height/2); // make center of the screen
  
  for(var i = 0; i < numCircles; i ++) {
    // use framecount to change the x coordinate through a sine function
    var xPos = sin(radians(frameCount * speed + i * phase)) * amplitude; 
    // spread the circles evenly across the y axis of screen
    var yPos = -height/2  + (i + 1) * height/numCircles;
    //draw the circles
    ellipse(xPos, yPos, 30, 10); 
  }
}