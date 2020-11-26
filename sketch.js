var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground

function preload()
{
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() 
{
createCanvas(600,590);
  
  monkey=createSprite(130,465,20,80);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(300,467,1500,20);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}

function draw() 
{
   background("white");
  
   if(keyDown("space")&& monkey.y > 100) 
   {
        monkey.velocityY = -10; 
   }
 
   monkey.velocityY = monkey.velocityY + 0.5
   monkey.collide(ground);
  
  ground.velocityX=-4;
  if(ground.x<0)
    {
  ground.x = ground.width/2;
    }
  
  spawnBananas();
  spawnObstacles();
      
  drawSprites()
}

function spawnBananas() 
{
 if (frameCount % 80 === 0){
    var banana = createSprite(300,350,20,10)
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -3;
    banana.lifetime = 200;
    bananaGroup.add(banana);
 }
}
function spawnObstacles() 
{
 if (frameCount % 300 === 0)
   {
    var obstacle = createSprite(300,400,10,40);
    obstacle.addImage(obstacleImage);
     obstacle.scale=0.3;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
}
}