/* DM3008 Generative Art, Ashley Hi 2026
 * Week 3 - Modulo
 * Assigment Example 
*/

//j=0;function setup(){createCanvas(1024,768)}function draw(){translate(512,384);i=frameCount;while(i-->1){rect(j++%i,j%i,3,i/9%9);rotate(0.009)}}

j = 0;

function setup() {
    createCanvas(1024,768)
}

function draw() {
    translate(512,384); // starts drawing the rects from approximately the centre of the canvas
                        // works effectively with the curve pattern and rotate function to achieve a fanned spiral effect
    
    i = frameCount;     // frameCount is key in what animates the drawing 
    
    while (i-- > 1) {   // while loop checks for condition of > 1 before decrementing i and entering the loop
                        // together with i = framecount, the counting looks a bit like this visually
                        //          frameCount
                        //      --------------------->  
                        // i =  1   2   3   4   5   6   ^
                        //          1   2   3   4   5   |   
                        //              1   2   3   4   |   while (i-- > 1)
                        //                  1   2   3   |  
                        //                      1   2   |
                        //                          1   |

        rect(
            j++%i,      // j increments by 1 every loop and is hence an increasing sequence  
                        // i decrements by 1 every loop and is hence a decreasing sequence
                        // this is an interesting pairing to compare because
                        // when j < i, j++%i = j: as j increases steadily, a nice stacking effect is achieved
                        // when j = i, j++%i = 0: reverts back to drawing rect at origin
                        // when j > i, j++%i =    effects of modulo truly kicks in, 
                        // creates a decreasing alternating series which oscillates from 0 to a decreasing x value
                        // looks like:   0                     x
                        //               ---------------------->
                        //               ----------------->
                        //               --------->
                        //               --->
            
            j%i,        // works the same way as j++%1 except j is always one frame count less than j++%1 as it does not increment
                        // i.e. j++%i = 1, 3, 5, 7 and j%i = 0, 2, 4, 6
                        // this means that the x and y position of the rect is always offset by 1 
                        // this allows a similar but non-proportional relation so curves can be drawn instead of diagonal lines
            
                        // most rects follow the same general curve pattern apart from a few outlying points which go off a different tangent
                        // this arises due to the offset in which j%1 would achieve a modulo of 0 before j++%i as j < j++
                        // causes the x and y values to have a huge divergence and deviate from the stable curve pattern
            
                        // minor deviation creates visual interest as it varies the texture the sketch creates

            3,          // width of rect stays constantly at 3 so the rects drawn stays a small size
            
            i/9%9       // height of rect varies between values (min)0.111... to (max)8.888... in steps of 0.111...
                        // 1. this is because of i/9 (i.e. if i = 1, i/9 = 0.111..., if i = 2, i/9 = 0.222..., etc)
                        // 2. and also because of %9 which counts from 0 to 8 before resetting to 0
                        // since this cycles through 0-8 and i ∈ [0, 8], the width would hence inrement by 0.111... to 8.888... in 81 counts before resetting and counting again
                        // this allows for the size of the rect to grow and shrink in cycles of 81 frames 
        ); 
                                   
        rotate(0.009)   // rotates every rect drawn by 0.009 radians 
                        // gives the overlapping rects a clearer stacking effect by having more visible corners due to rotation
                        // also emphasises the curve profile and spiral effect as mentioned
    }
}

/*
I think the most interesting thing about this tweet is how it combines various mathematical algorithms which produce similar effects. The method of counting to a certain number before resetting is evident in 1. the i = frameCount and while (i-- > 1) commands, and 2. the j++%i, j%i, and i/9%9 commands. This draws a parallel between loops and modulos in the way they produce conceptually similar results despite being different operations. Having modulos within loops hence are almost like having nested loops though I suppose using modulos would allow the code to technically be more robust and efficient. 
*/