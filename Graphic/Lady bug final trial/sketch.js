let spriteSheet;
let walkingAnimation;
let animations; 
let totalAnimations; 
function preload() {
  spriteSheet = loadImage("assets/ladybugsprite.png");
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);

  for(let i=0; i < totalAnimations; i++) {
    //(spriteSheet, sw, sh, dx, dy, animationLength, speed, framerate, offsetX = 0, offsetY = 0)
    animations[i] = new WalkingAnimation(spriteSheet,80,80,random(50,350),random(50,350),4,.5,6);
  }
}

function draw() {
  background(220);
  for(let i=0; i < animations.length; i++) {
    animations[i].draw();
  }
}


class WalkingAnimation {
  constructor(spriteSheet, sw, sh, dx, dy, animationLength, offsetX = 0, offsetY = 0) {
    this.spriteSheet = spriteSheet;
    this.sw = sw;
    this.sh = sh;
    this.dx = dx;
    this.dy = dy;
    this.u = 0;
    this.v = 0;
    this.animationLength = animationLength;
    this.currentFrame = 0;
    this.moving = 0;
    this.xDirection = 1;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }

  draw() {

     if (this.moving != 0)
       this.u = this.currentFrame % this.animationLength;
     else
     this.u = 0;

    this.u = (this.moving != 0) ? this.currentFrame % this.animationLength : 0;
    push();
    translate(this.dx,this.dy);
    scale(this.xDirection,1);
  
    image(this.spriteSheet,0,0,this.sw,this.sh,this.u*this.sw+this.offsetX,this.v*this.sh+this.offsetY,this.sw,this.sh);
    pop();
    if (frameCount % 6 == 0) {
      this.currentFrame++;
    }
  
    this.dx += this.moving;
  }
  moveRight() {
    this.moving = 1;
    this.xDirection = 1;
  }

  moveLeft() {
    this.moving = -1;
    this.xDirection = -1;
  }
}