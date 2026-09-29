let tiltX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  lockGestures();
  enableSensorTap('Tap to enable tilt sensors');
}

function draw() {
  background(20);

  if (!window.sensorsEnabled) {
    fill(255);
    textAlign(CENTER, CENTER);
    text('Waiting for tilt…', 0, 0);
    return;
  }

  // Smooth the raw sensor value so the ellipse settles instead of jittering.
  tiltX = lerp(tiltX, rotationX, 0.1);

  push();
  rotateX(radians(tiltX));
  noStroke();
  fill(168, 85, 247); // purple
  ellipse(0, 0, 320, 200);
  pop();
}

function mousePressed() {
  return false; // let p5-phone's gesture handling manage the touch
}
