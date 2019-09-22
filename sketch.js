function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(41,56,88);
  angleMode(DEGREES);
  frameRate(12);
}

function draw() {
  // put drawing code here
  translate(width/2, height/2);

  strokeWeight(2);
  stroke(lerpColor(color(221, 93, 0),color(247, 188, 19),frameCount/60));
  line(width/6, 0, cos(frameCount*6) * width/6, sin(frameCount*6) * width/6);

  if (frameCount == 60) {
    noLoop();
  }
}
