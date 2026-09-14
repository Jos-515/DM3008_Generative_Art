/* DM3008 Generative Art, Ashley Hi 2026
 * Week 4 - Waves & Distribution
 * Wave Composition A
*/

var frequency = 500; // how many times the sin wave draws
var rad = 150;
var amp = 90;

function setup() {
  createCanvas(800, 500);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(1);
    noFill();
    
    push();
    translate(width/2, height/2);
    
    beginShape();
    
    for (var i = 0; i < 360; i++) {
        var p = createVector(0, 0);
        var a = rad + sin(radians(i * frequency)) * amp;
        
        p.y = sin(radians(i + frameCount) + frameCount/50 / frameCount/ 5) * 2*a;
        p.x = cos(radians(i + 4) ^ frameCount/100 + frameCount/50) * a;
        
        vertex(p.x, p.y);
    }
    
    endShape();
    pop();
}