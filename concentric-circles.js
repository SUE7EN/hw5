function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 15; i <= 390; i = i + 8) {
    noFill();
    ellipse(200, 200, i, i);
  }
}
