x= 100
y= 200
let hue= 0;
sat =  100; 

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(0,0,0);
  
  if (mouseIsPressed){
    if (mouseButton === LEFT){
      x= mouseX;
      y= mouseY;
    } else if (mouseButton= CENTER){
      y= mouseX
      x= mouseY
    }
  
  }
// draws face
hue= mouseX / width * 360;
sat= mouseY / height * 100;
drawFace (x,y);
drawFace (x+70, y+70);
}

function drawFace(x,y){
  fill(hue, sat,100);
  circle (x,y,50);
  fill (0)
  square(x,y-10,5);
  square(x+10, y-10, 5);
  square (x+5,y+5,5);
}