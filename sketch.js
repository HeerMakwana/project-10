var ship, shipMoving;
var seaImage, sea;

function preload(){
  shipMoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(400,200,400,20)
  sea.addImage(seaImage)
  sea.scale = 0.3

  ship = createSprite(200,200,30,30)
  ship.addAnimation("moving", shipMoving)
  ship.scale = 0.4
}


function draw() {
  background("blue");

  sea.velocityX=-2
  console.log(sea.width)

  if(sea.x<0){
    sea.x=600
  }

  drawSprites()

}