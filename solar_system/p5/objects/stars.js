new p5();

function Star(position_percent_vector,radius) {
  this.position_percent_vector = position_percent_vector;
  this.radius = radius;
}

var sun = new Star(createVector(50,50),25);
