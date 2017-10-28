

function setup() {
  var myCanvas = createCanvas(windowWidth, 400);
  myCanvas.parent('p5Project');
}

function draw() {
  background(0, 51, 102)
  ellipse(sun.position_percent_vector.x,sun.position_percent_vector.y,sun.radius);
}

function windowResized() {
  resizeCanvas(windowWidth, 400);

}
