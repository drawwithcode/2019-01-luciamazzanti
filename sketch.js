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

if (frameCount < 60) {
  //yellow/orange sun
   translate(width/2, height/2);
   stroke(lerpColor(color(221, 93, 0),color(247, 188, 19),frameCount/60));
   line(width/6, 0, cos(frameCount*6) * width/6, sin(frameCount*6) * width/6);
 } else if (frameCount > 60 & frameCount < 120) {
   //white pearl
   translate(width/2, height/2);
   stroke("white");
   noFill();
   triangle(width/6, 0, 0, height/6, cos(frameCount*6) * width/6, sin(frameCount*6) * width/6);
 } else if (frameCount > 120) {
   //pink shell
   push();
   translate(width/2, height*5/6);
   stroke("pink");
   strokeWeight(1);
   line(width/9, 0, cos(frameCount*6) * width/6, sin(frameCount*6) * width/9);
   pop();

   //bubbles
   stroke("white");
   strokeWeight(5);
   ellipse(mouseX, mouseY, 25, 25);

   //text
   textSize(50);
   strokeWeight(1);
   textAlign(CENTER);
   text('Move the mouse to create bubbles!', width/2, 70);
 }
}
