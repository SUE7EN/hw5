function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 390; i = i + 8) {
    line(i, 0, i, 2 * i);
  }
}
