var bg;
var magnify = 300;
var rotation = 0;
var radius = 0;
var elements = 500;

function setup() {
  createCanvas(800, 800);
  bg = createRadialGradient(800, 800, color(255), color(0));
}

function draw() {
  image(bg, 0, 0);
  translate(width * 0.5, height * 0.5);

  radius = (cos(frameCount * 0.0013) + 2) * 10;
  rotation = (sin(frameCount * 0.0011) + 1) * 10;
  var spacing = TWO_PI / elements;

  noFill();
  stroke(255, 255, 255, 100);
  beginShape();
  for (var j = 0; j < 256; j++) {
    var p = createVector(0, 0);
    p.add(sin(spacing * j * radius) * magnify, 0);
    p.rotate(spacing * j * rotation);
    vertex(p.x, p.y);
  }
  endShape();
}

function createRadialGradient(w, h, innerColor, outerColor) {
  var gfx = createGraphics(w, h);
  gfx.pixelDensity(1); 
  gfx.loadPixels();
  var cx = w / 2;
  var cy = h / 2;
  var maxDist = dist(0, 0, cx, cy);

  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      var d = dist(x, y, cx, cy);
      var amt = constrain(d / maxDist, 0, 1);
      var c = lerpColor(innerColor, outerColor, amt);
      var idx = (x + y * w) * 4;
      gfx.pixels[idx] = red(c);
      gfx.pixels[idx + 1] = green(c);
      gfx.pixels[idx + 2] = blue(c);
      gfx.pixels[idx + 3] = 255;
    }
  }
  gfx.updatePixels();
  return gfx;
}

