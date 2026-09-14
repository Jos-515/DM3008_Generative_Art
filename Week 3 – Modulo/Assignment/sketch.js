/* DM3008 Generative Art
 * Week 3 - Modulo
 * Assigment: Micro Animation 6
*/

c=512;

function setup() {
    createCanvas(c,c); // Establishes 
}

function draw(){
    translate(c/2,c/2);
    i=frameCount;
    while(i-->1){rotate(11);
        rect(c++%i, c--%i,1,1);
    }
}

// Morphes into Star like shapes
// The circle expands continuously 