/* DM3008 Generative Art, Ashley Hi 2026
 * Week 3 - Modulo
 * Modulo Operator Exercise
*/

var xpos = 0, ypos = 0;

function setup(){
    createCanvas(200,200);
    background(200);
    //frameRate(1); //uncomment to slow down the animation
}

function draw(){
    noFill();
    rect(xpos, ypos, 20, 20); //draws 20x20px rectangles at (xpos,ypos)
    
    // update new xpos, ypos every frame
    xpos = (xpos + 20) % 100; // *EDIT CODE HERE
    ypos = ypos + 20; // *EDIT CODE HERE
}