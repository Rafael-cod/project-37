const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score = 0;

var player, ground, coin, ceiling, backGround, obstacle;

function preload(){
	backGround = loadImage("images/bg.jpg");
}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	player = new Player(50,680);

	ground = new Ground(850,690,1725,20);
	ceiling = new Ground(850,10,1725,20);

	coin = new Coin(-50,0)
	obstacle = new Obstacle(-50,0,50,50);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  	background(backGround);	

	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(player.body,player.body.position,{x:0,y:-5});
	}

	Matter.Body.applyForce(player.body,player.body.position,{x:0.2,y:0});

	drawSprites();
	  
	if(frameCount % 50 === 0){
		score = score + 25;
	}

	//if(frameCount % 60 === 0){
		//coin = new Coin(400,random(100,500));
	//}
	
	//if(frameCount % 70 === 0){
		//obstacle = new Obstacle(500,random(150,450),50,random(50,150));
	//}

	noStroke();
	textSize(35)
	fill(200);
	text("Score  " + score, width-300, 50)
 
 	ground.display();
 	ceiling.display();
 	player.display();
	//coin.display();
	//obstacle.display();
	 
	//detectcollision(player,coin);

}



//function detectcollision(player,coin){
	//coinBodyPosition = coin.body.position;
	//playerBodyPosition = player.body.position;
	//var distance = dist(playerBodyPosition.x, playerBodyPosition.y, playerBodyPosition.x, coinBodyPosition.y)
    //if(distance <= coin.r + player.r){
        //Matter.Body.World.remove(world,coin.body,);
    //}
//}
