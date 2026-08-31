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
    
    // --------- Task 1

    //xpos = (xpos + 20) % 200; 
    //ypos = (ypos + 20) % 100; 

    // --------- Task 2

    xpos = (xpos + 20) % 200; 
    ypos = (ypos + 20) % 200; 

    // --------- Task 3

    //xpos = (xpos + 20) % 200; 
    //ypos = (ypos + 20) % 300; 

    // --------- Task 4

    //xpos = (xpos + 20) % 80; 
    //ypos = (ypos + 20) % 100; 

}