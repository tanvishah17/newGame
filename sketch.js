var player, jack;
var bgImg, bg,beanstalk;
var obstacle1, obstacle2, reward1, reward2, reward3;
var treasure, hen, cloud, ground;

function preload(){
player = loadAnimation("images/jack.jpeg","images/jack2.jpeg");
beanstalk = loadImage("images/beanstalk.jpeg");
bgImg = loadAnimation("images/sky-clouds_gif.gif");
obstacle1 = loadImage("images/thorn.jpeg");
obstacle2 = loadImage("images/obstacle_2.jpg");
reward1 = loadImage("images/reward_1.jpeg");
reward2 = loadImage("images/reward_2.jpeg");
reward3 = loadImage("images/reward_3.jpeg");
treasure = loadImage("images/treasure.jpeg");
hen = loadImage("images/goldenegg_hen.jpg");
cloud = loadImage("images/castle_cloud.jpeg");
ground = loadImage("images/ground.jpeg");
}

function setup(){

  createCanvas(windowWidth, windowHeight);
//background image
bg = createSprite(600,400,700,400)
bg.addAnimation("moving_clouds",bgImg);

jack = createSprite(500,300);
jack.addAnimation("climbing",player);
jack.scale = 0.4;
//creating top and bottom grounds
/*bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;*/



}

function draw() {
  
  //background("black");
        
          //making the hot air balloon jump
          /*if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;8*/
   
        drawSprites();
        
}