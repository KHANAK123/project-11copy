var runner,Runner_1,Runner_2
var path

function preload(){
  //pre-load images
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(600,600);
  //create sprites here
   runner = createSprite(50,160,20,50)
   runner.addAnimation("running", runner_running)
   Runner.scale = 0.5
   Runner.scale = 0.5
   
   path = createSprite(5200,180,400,20)
   path.addImage ("path", pathImage)
   path.x = path.width /2;
   path.velocityX = -4;
   path.scale = 1.2;

  

   invisibleGround = createSprite (200,190,400,10)
   invisibleGround.visible = false;



}

function draw() {
  background(180);
  if (path.y > 400){
    path.y = height /2;
  }
  drawSprites();
}
