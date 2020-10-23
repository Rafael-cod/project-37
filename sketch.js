const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score = 0;

var player, ground,deadLine, backGroundImg, backGround, obstacle;
var gameState = 0;

function preload(){
	backGroundImg = loadImage("images/backg.jpg");
}

function setup() {
	createCanvas(800, 600);
  
	backGround = createSprite(500,300);
	backGround.addImage("images/backg.jpg",backGroundImg);
	backGround.scale = 1.8;
	backGround.x = backGround.width /2;
	backGround.velocityX = -4;
	
	deadLine = createSprite(500,25,1000,50);
	deadLine.shapeColor = color(255,50,50);

	engine = Engine.create();
	world = engine.world;

	player = new Player(50,570);

	ground = new Ground(850,590,1725,30);

	obstacle = new Obstacle(-50,0,50,50);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  	background(255);	

	  if (backGround.x < 0){
		backGround.x = backGround.width/2;
	  }

	drawSprites();

		Matter.Body.applyForce(obstacle.body,obstacle.body.position,{x:-4,y:0});
	if(gameState === 0){
		if(frameCount % 100 === 0){
			obstacle = new Obstacle(1000,(150,350),50,random(100,325));
		}
		if(frameCount % 50 === 0){
			score = score + 25;
		}
		if(keyIsDown(UP_ARROW)){
			Matter.Body.applyForce(player.body,player.body.position,{x:0,y:-5});
		}
	}

	noStroke();
	textSize(35);
	fill(255);
	text("Score  " + score, 600, 35);

	noStroke();
	textSize(20);
	fill(255);
	text("Press Up Arrow key to go up", 25, 35);

	if(player.body.position.y <= 40 ){
		gameState = 1;
	}

	if(player.body.position.x <= 0 ){
		gameState = 1;
	}

	if(gameState === 1){
		backGround.velocityX = 0;
		stroke(255);
		strokeWeight(5);
		textSize(75);
		fill(50);
		text("Game Over", 275, 150);
	}
 
 	ground.display();
 	player.display();
	obstacle.display();

}
