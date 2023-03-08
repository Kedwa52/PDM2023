let initTone = true;
let pitch = 600;
let telephone;

// Set up Tone
let osc = new Tone.AMOscillator(400, 'sine', 'sine').start()
let gain = new Tone.Gain().toDestination();
let pan = new Tone.Panner().connect(gain);
let ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.001,
  decay: 0.1,
  sustain: .10,
  release: 1.2
}).connect(pan);
osc.connect(ampEnv);

function preload(){
    telephone =loadImage('assets/telephone.png') ;
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("black");
  text ('Press space bar to initilize text',150,375);
  image(telephone,100,100); 
  
  if(mouseIsPressed && (mouseX > 100) && (mouseX < 350) && (mouseY > 100) && (mouseY < 300)){
    console.log('pressed');
    ampEnv.triggerAttackRelease(0.5);
    osc.frequency.setValueAtTime(pitch+200, '+1');
  }
  if ((frameCount % 60) === 0) {
   pitch =+ 25;}
}

function keyPressed(){
  if (keyCode= 32 && initTone ===true)
  {
    Tone.start();
    initTone= false;
  }
}
