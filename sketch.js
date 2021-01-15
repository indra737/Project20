var cat,catImg,catImg2,catAnimation;
var mouse,mouseImg,mouseImg2,mouseAnimation;
function preload() {
    catImg=loadImage("tomOne.png")
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(800,600,20,20)
    cat.addImage(catImg)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  

}
