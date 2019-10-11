function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i < 200; i = i + 10) {
    line(210 - i, i, 190 + i, i);
  }
  for (var i = 200; i <= 390; i = i + 10) {
    line(i - 190, i, 590 - i, i);
  }
}
