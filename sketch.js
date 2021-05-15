var bg,bg2,form,system,code,security;
var score=0;
var bg3;
var covid;


function preload() {
 
  bg3 = loadImage("covidbg.jpeg");
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2 = loadImage("treasure.jpg");
  bg4 = loadImage("city.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  security = new Security();
  system = new System();
  covid = new Covid();
 
  
}

function draw() {
  background(bg3);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 1) {
    clear();
    background(bg3);
    fill("black");
    security.hide();
    security.cal();
    //textSize(40);
    //text("TREASURE UNLOCKED",250, 200);
  }

  
  drawSprites()
}