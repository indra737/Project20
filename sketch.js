var cat,catImg,catImg2,catAnimation;
var mouse,mouseImg,mouseImg2,mouseAnimation;
var garden,gardenImg;
function preload() {
    catImg=loadImage("tomOne.png")
    gardenImg=loadImage("garden.png")
    mouseImg=loadImage("jerryOne.png")
    catAnimation=loadAnimation("tomThree.png","tomTwo.png");
  mouseAnimation=loadAnimation("jerryTwo.png","jerryThree.png");
  mouseImg2= loadAnimation("jerryFour.png");
  catImg2=loadAnimation("tomFour.png");
}

function setup(){
    createCanvas(900,700);
    garden= createSprite(470,400)
   garden.addImage(gardenImg)
  cat=createSprite(800,550,20,20)
    cat.addImage(catImg)
  
  cat.addAnimation("running",catAnimation);
  cat.addAnimation("sitting",catImg2)
  cat.scale=0.18;
  mouse= createSprite(-70,600)
  mouse.addImage(mouseImg)
  mouse.addAnimation("detectign",mouseImg2);
  mouse.scale=0.18;
  mouse.velocityX=2;
  
  //cat.debug=true;
  //mouse.debug=true;
  mouse.setCollider("rectangle",0,0,800,1000)
  cat.setCollider("rectangle",0,0,1000,1000)
  
}

function draw() {

    background(255);
  if(cat.isTouching(mouse)){
    mouse.velocityX=0;
     cat.velocityX=0;
    cat.velocityY=0;
    cat.changeAnimation("sitting")
    mouse.changeAnimation("detectign")
  }
  

    drawSprites();
}


function keyPressed(){
if(keyCode=== LEFT_ARROW){
  cat.changeAnimation("running")
  cat.velocityX=-3;
  cat.velocityY=0.3;
  mouse.velocityX=0;
  mouse.addAnimation("teasing",mouseAnimation)
  mouse.changeAnimation("teasing")
}

  

}
