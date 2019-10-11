function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255)
  for (var i = 20; i <= 390; i = i + 30) {
    for (var j = 20; j <= 390; j = j + 30) {
    ellipse(i, j, 20);
    }
  }
}
