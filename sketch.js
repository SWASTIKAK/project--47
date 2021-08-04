var bgImg;
var hang,hangImg1,hangImg2;
var bg;
var leaves,leaves2;
var leavesImg1, leavesImg2, leavesImg3, leavesImg4;
var sloth,slothImg;
var jaguar, jaguarImg;
var branch1, branch2, branch3, branch3; 
var branchImg1, branchImg2, branchImg3;
var gameState = "play";

//Function to preload necessary Images
function preload(){
   bgImg = loadImage("bg3.png");
   /*hangImg1 = loadImage("hang1.png");
   leavesImg1 = loadImage("leaf1left.png");
   leavesImg2 = loadImage("leaf1right.png");
   leavesImg3 = loadImage("leaf2left.png");
   leavesImg4 = loadImage("leaf2right.png");
   jaguarImg = loadImage("jaguar.png");*/
   slothImg = loadImage("sloth2right.png");
   sloth2Img = loadImage("sloth4.png");
   branchImg1 = loadImage("branch1right.png");
   branchImg3 = loadImage("branch2.png");
   branchImg2 = loadImage("branch3.png");
   branchImg4 = loadImage("branch1left.png");
   snakeImg = loadImage("sanke.png");
   eagleImg = loadImage("eagle.png");

  } 
  
//Function to set initial environment
function setup() {
  createCanvas(700, 900);
  
  bg = createSprite(530,80);
  bg.addImage("background", bgImg);
  bg.scale = 1.2;
  bg.velocityY = 5;

  sloth = createSprite(170,600);
  sloth.addImage("sloth",slothImg );
  sloth.scale = 0.7;
 // sloth.debug = true;
  sloth.setCollider("circle",-10,0,125);

  /*hang = createSprite(300,140,20,20);
  hang.addImage("leaves", hangImg1);
  
  leaves2 = createSprite(414,880);
  leaves2.addImage("bushes",leavesImg4 );

  leaves = createSprite(214,915);
  leaves.addImage("bushes",leavesImg1 );



  jaguar = createSprite(444,370);
  jaguar.addImage("jaguar",jaguarImg);
  jaguar.scale = 0.6;

  branch1 = createSprite(64,550);
  branch1.addImage("branches",branchImg1);

  branch2 = createSprite(514,480);
  branch2.addImage("branches",branchImg2);
  branch2.scale = 0.7;

  branch3 = createSprite(44,320);
  branch3.addImage("branches",branchImg3);
  branch3.scale = 0.7;*/

  branchesGroup = new Group();
  obstaclesGroup = new Group();

  
  
}

//Function to display UI
function draw() {
  background("white");

  if(bg.y > 680){
    bg.y = 550;
 }

if(gameState === "play"){

  if(keyDown("left_arrow")){
     sloth.x = sloth.x - 5;
     sloth.addImage("sloth",slothImg );
  }

  if(keyDown("right_arrow")){
      sloth.x = sloth.x + 5;
      sloth.addImage("sloth",slothImg );
  }
  
  if(keyDown("up_arrow")){
      sloth.velocityY = -5;
      sloth.addImage("sloth",slothImg );
  }

  sloth.velocityY = sloth.velocityY + 0.8;

  spawnBranches();
  spawnObstacles();
  console.log(bg.y);

  if(branchesGroup.isTouching(sloth)){
    sloth.addImage("sloth", sloth2Img);
    sloth.setVelocity(0,0);
    
  }

  if(obstaclesGroup.isTouching(sloth)){
    sloth.destroy();
    gameState = "end";
  }
 }
  drawSprites();
  
}

function spawnBranches(){

    if(frameCount%161 === 0){
       var branches = createSprite(random(620,630),-50,80,10);
       branches.velocityY = 4;
      // branches.debug = true;
       branches.setCollider("rectangle",10,10,400,10);
     //  branches.scale = 1.2

       var rand = Math.round(random(1,2));
       switch(rand){
        case 1: branches.addImage(branchImg1);
               break;
        case 2: branches.addImage(branchImg2);
               break;
       default: break;

       

      }
      branchesGroup.add(branches);
    }

    if(frameCount%302 === 0){
        var branches1 = createSprite(random(130,140),-50,80,10);
        branches1.velocityY = 4;
       // branches1.debug = true;
        branches1.setCollider("rectangle",0,0,400,10);
       //branches1.scale = 1.2
 
        var rand = Math.round(random(1,2));
        switch(rand){
         case 1: branches1.addImage(branchImg4);
                break;
         case 2: branches1.addImage(branchImg3);
                 break;
        default: break;
        
      }
      branchesGroup.add(branches1);
    }
    
}

function spawnObstacles(){
   if(frameCount%200 === 0){
     var obstacles1 = createSprite(random(120,130),-50, 80, 10)
     obstacles1.addImage("snake", snakeImg);
     //obstacles1.debug = true;
     obstacles1.velocityY = 4;
     obstacles1.scale = 0.3
     obstacles1.setCollider("rectangle",0,0,960,10);
     obstaclesGroup.add(obstacles1);
     
   }
   if(frameCount%273 === 0){
    var obstacles2 = createSprite(random(610,620),-50, 80, 10)
    obstacles2.addImage("eagle", eagleImg);
   // obstacles2.debug = true;
    obstacles2.velocityY = 4;
    obstacles2.scale = 0.3;
    obstaclesGroup.add(obstacles2);
    obstacles2.setCollider("rectangle",0,0,1200,10);
}
  }
  
  