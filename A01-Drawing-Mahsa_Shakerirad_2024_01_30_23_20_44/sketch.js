let prevX, prevY;
let r, g, b;

function setup() {
  createCanvas(1920, 1080);
  background(0);
  strokeWeight(7);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  // 
  if (mouseIsPressed) {
    let newX = mouseX + random(-10, 10);
    let newY = mouseY + random(-10, 10);

    // 
    stroke(r, g, b);
    line(prevX, prevY, newX, newY);

    // 
    prevX = newX;
    prevY = newY;

    // 
    r = (r + random(-10, 10)) % 256;
    g = (g + random(-10, 10)) % 256;
    b = (b + random(-10, 10)) % 256;
  }
}

function mousePressed() {
  // 
  prevX = mouseX;
  prevY = mouseY;
}

function keyPressed() {
  // 
  if (key === ' ') {
    background(220);
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
