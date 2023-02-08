let spriteSheet;
let spriteSheet2;

let walkingAnimation;
let walkingAnimation2;
let walkingAnimationRepeat;

// loads pictures before coding starts
function preload() {
  spriteSheet = loadImage("assets/SpelunkyPurple.png");
  spriteSheet2 = loadImage("assets/SpelunkyMonk.png");
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  

  walkingAnimation = new WalkingAnimation(spriteSheet,80,80,random(100,300),random(100,300),9);
  walkingAnimationRepeat = new WalkingAnimation(spriteSheet,80,80,random(100,300),random(100,300),9);
  walkingAnimation2 = new WalkingAnimation(spriteSheet2,80,80,random(100,300),random(100,300),9);
}

function draw() {
  background(220);
  
  walkingAnimation.draw();
  walkingAnimation2.draw();
  walkingAnimationRepeat.draw();
  
}

//i like the control better going same direction
function keyPressed() {
  walkingAnimation.keyPressed(RIGHT_ARROW,LEFT_ARROW);
  walkingAnimation2.keyPressed(RIGHT_ARROW, LEFT_ARROW);
  walkingAnimationRepeat.keyPressed(RIGHT_ARROW,LEFT_ARROW);
}

function keyReleased() {
  walkingAnimation.keyReleased(RIGHT_ARROW,LEFT_ARROW);
  walkingAnimation2.keyReleased(RIGHT_ARROW,LEFT_ARROW);
  walkingAnimationRepeat.keyReleased(RIGHT_ARROW,LEFT_ARROW);
}

//creating classes to group amimation movement together
class WalkingAnimation {
  constructor(spritesheet, sw, sh, dx, dy, animationLength, offsetX = 0, offsetY = 0) {
    this.spritesheet = spritesheet;
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
    this.u = (this.moving != 0) ? this.currentFrame % this.animationLength : 0;
    //push& pop tp makke sure this isn't applied cont. 
    push();
    translate(this.dx,this.dy);
    scale(this.xDirection,1);
  
    image(this.spritesheet,0,0,this.sw,this.sh,this.u*this.sw+this.offsetX,this.v*this.sh+this.offsetY,this.sw,this.sh);
    pop();
    if (frameCount % 6 == 0) {
      this.currentFrame++;
    }
  
    this.dx += this.moving;
  }

  keyPressed(right, left) {
    if (keyCode === right) {
      this.moving = 1;
      this.xDirection = 1;
      this.currentFrame = 1;
    } else if (keyCode === left) {
      this.moving = -1;
      this.xDirection = -1;
      this.currentFrame = 1;
    }
  }

  keyReleased(right,left) {
    if (keyCode === right || keyCode === left) {
      this.moving = 0;
    }
  }
}