/* DM3008 Generative Art
 * Week 3 - Modulo
 * Assigment: Micro Animation 6
*/

c=512;

function setup() {
    createCanvas(c,c);
    // Establishes that the canvas is a square (512 pixels by 512 pixels)
    noStroke();
    // this removes the black border around the square shape, making the blend between colour shades smoother and less noticiable. 
}

function draw(){

    push(); 
    translate(c/2,c/2);
    ranslate(c/2,c/2);
    // This changes the position of the starting point to be the centre of the canvas. Ensuring that the rectangles begin there and not at the top left corner. 
    i=frameCount;
    // The variable framecount tracks how many times the function draw is executed. 
    while(i-->1){
        rotate(11);
        // (i-->1) ensures that the while loop will continue to executre until i is no longer greater than 1. 
        // therefore, everytime the draw function occurs, everthing is rotated by 11 degrees. 

        let x = c++%i;
        let y = c--%i;
        // Instead of directly passing the values of c++%i and c--%i as x and y in the rect function.
        // I created variables to store the values of the x and y position for the rectangle. This is so that I can use them in the switch case and apply the colour change. 

        let d = Math.max(Math.abs(x), Math.abs(y)) % c;
        // The variable d represents the distance from the centre of the canvas to the current rectangle being drawn.
        // For this variable, Math.max finds the maximum value of the absolute values of x & y. Therefore calculating how far x & y are from 0, enabling the distance from the centre of the canvas to be calculated.

        let colour;
        //Created a variable to store the colour value. 

        switch(true) {
            case (d < 64):
                colour = lerpColor(color(221,229,214,127), color(200,213,190,127), d/64);
                break;
            case (d < 128):
                colour = lerpColor(color(200,213,190,127), color(178,196,164,127), (d-64)/64);
                break;
            case (d < 192):
                colour = lerpColor(color(178,196,164,127), color(157,185,143,127), (d-128)/64);
                break;
            case (d < 256):
                colour  = lerpColor(color(157,185,143,127), color(135,168,120,127), (d-192)/64);
                break;
            case (d < 320):
                colour = lerpColor(color(135,168,120,127), color(110,143,96,127), (d-256)/64);
                break;
            case (d < 384):
                colour = lerpColor(color(110,143,96,127), color(87,119,75,127), (d-320)/64);
                break;
            case (d < 448):
                colour = lerpColor(color(87,119,75,127), color(63,92,54,127), (d-384)/64);
                break;
            default:
                colour = color(63,92,54,127);
                break;
        }
        // The Switch Case statement utilising the distance from the centre of the canvas to determine which shade of green the rectangle should generate in.

        fill(colour);
        // Included the fill component so that each rectangle generaated has a colur that changes based on how far the rectangle is from the centre of the canvas.
        // As you move further from the centre, the shade of green darkens. Appearing as a gradient. 
        // Additionally to prevent the contrast between the shades from being hash, i used lerpColor to smoothen the transition between them. 

        rect(x, y, 2, 2);
        // Based on which iteration of the while loop the user is on, the rectangles will be drawn at positions reflecting this. With the width and height equal to 1 pixel. 
        // So as the function progresses, the rectangles are drawn in a circular pattern. THe motin appears like a wind turbune or pinwheel.
        // Constantly moving, evoking the feeling that it is building up to a create a bigger image, howevr that necer happems, after a dark abyss is created it all goes back to the begining.
    }
    pop();
    // Pop and push are used to ensure that any changes between them are not applied to the rest of the canvas. 
    // Push is used to add the content to a stack whereas pop is used to removes it. This isolates the changes made. 
}

// I chose to focus on this microanimation as I liked the visual output it produced. 
// As the layers overlap, star like shapes begin to form. It reminds me of the night sky, in a way making the loop feel like each time it resets a new day begins. 
// This is due to the way the frameCount variable is used, as soon as it is less than 1, the whole function restarts. Appearling like the slate has been wiped clean.  

// Additionally, to modify this, I wanted to add colour, influenced by the nature around me, i chose to work through a gradient of sage green.
// This made the merging of the layers more pronounced, it felt like with each iteration the colours were building upon each other. 
