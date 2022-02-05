
var trex ,trex_running, ground
function preload(){
 trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png") 


}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,150,20,20)
  trex.addAnimation("running", trex_running);
  ground = createSprite(300,200,600,25)
}

function draw(){
  background("white")
  
if(keyDown("space")){
trex.velocityY = -10;
}
trex.velocityY = velocityY+1
trex.collide(ground)

  drawSprites()
}

