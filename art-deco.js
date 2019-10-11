function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noFill();
  for (var i = 15; i <= 60; i = i + 15) {
    for (var j = 40; j <= 390; j = j + 80) {
    rectMode(CENTER);
    rect(j, 200, i, i);
    }
  }
}
