/* DM3008 Generative Art
 * Week 3 - Modulo
 * Assigment: Micro Animation 6
*/

c=512;

function setup() {
    createCanvas(c,c); // Establishes that the canvas is a square (512 pixels by 512 pixels)
}

function draw(){
    translate(c/2,c/2);
    // This changes the position of the starting point to be the centre of the canvas. Ensuring that the rectangles begin there and not at the top left corner. 
    i=frameCount;
    // The variable framecount tracks how many times the function draw is executed, 
    while(i-->1){rotate(11);
        // (i-->1) ensures that the while loop will continue to executre until i is no longer greater than 1. 
        // therefore, everytime the draw function occurs, everthing is rotated by 11 degrees. 
        rect(c++%i, c--%i,1,1);
        // Based on which iteration of the while loop the user is on, the rectangles will be drawn at positions reflecting this. With the width and height equal to 1 pixel. 
        // So as the function progresses, the rectangles are drawn in a circular pattern. THe motin appears like a wind turbune or pinwheel.
        // Constantly moving, evoking the feeling that it is building up to a create a bigger image, howevr that necer happems, after a dark abyss is created it all goes back to the begining.
    }
}

// I chose to focus on this microanimation as the 

// As the layers overlap, star like shapes begin to form. It reminds me of the night sky, in a way making the loop feel like each time it resets a new day begins. 