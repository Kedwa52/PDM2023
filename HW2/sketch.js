const x = 0;
let y = 0;
let size = 50
let changeColor= 255


function setup() {
  createCanvas(800, 600);
  background(255);
  let stroke= 0
}


function draw(colorBuckets) {
  
 //red
  fill(255,0,0)
  square(x,y,size)
//orange
  fill(255,128,0)
  square(x,y+50,size)
  // yellow
  fill(255,255,0)
  square(x,y+100,size)
  //green
  fill(0,255,0)
  square(x,y+150,size)
  //cyan
  fill(0,255,255)
  square(x,y+200,size)
  //blue
  fill(0,0,255)
  square(x,y+250,size)
  //purple
  fill('purple')
  square(x,y+300,size)
  //brown
  fill(100,50,0)
  square(x,y+350,size)
  //white
  fill(255)
  square(x,y+400,size)
  //black
  fill(0)
  square(x,y+450,size)


  if(mouseIsPressed && (mouseX > 0) && (mouseX < 50) && (mouseY > 0) && (mouseY < 50)){
     changeColor = "red";
     } 
     if(mouseIsPressed && (mouseX > 0) && (mouseX < 50) && (mouseY > 50) && (mouseY < 100)){
      changeColor = "orange";
      } 
      if(mouseIsPressed && (mouseX > 0) && (mouseX < 50) && (mouseY > 100) && (mouseY < 150)){
        changeColor = "yellow";
        }
        if(mouseIsPressed && (mouseX > 0) && (mouseX < 50) && (mouseY > 150) && (mouseY < 200)){
          changeColor = "green";
          }
          if(mouseIsPressed && (mouseX > 0) && (mouseX < 50) && (mouseY > 200) && (mouseY < 250)){
            changeColor = "cyan";
            }
            if(mouseIsPressed && (mouseX > 0) && (mouseX < 50) && (mouseY > 250) && (mouseY < 300)){
              changeColor = "blue";
              }
              if(mouseIsPressed && (mouseX > 0) && (mouseX < 50) && (mouseY > 300) && (mouseY < 350)){
                changeColor = "purple";
                }
                if(mouseIsPressed && (mouseX > 0) && (mouseX < 50) && (mouseY > 350) && (mouseY < 400)){
                  changeColor = "brown";
                  }
                  if(mouseIsPressed && (mouseX > 0) && (mouseX < 50) && (mouseY > 400) && (mouseY < 450)){
                    changeColor = "white";
                    }
                    if(mouseIsPressed && (mouseX > 0) && (mouseX < 50) && (mouseY > 450) && (mouseY < 500)){
                      changeColor = "black";
                      }
    }

   // draw line w red

 function mouseDragged(){
  line(mouseX,mouseY,pmouseX,pmouseY,50)
  stroke(changeColor)
 }
 
 

