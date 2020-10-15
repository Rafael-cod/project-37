class Coin {
  constructor(x, y) {
    var options = {
         isStatic:true,
         'restitution':0.0,
         'friction':0.1,
         'density':1.0
    }
    this.body = Matter.Bodies.circle(x, y, 0, options);
    this.radius = 0;
    this.x = x;
    this.y = y;
    this.image = loadImage("images/coin.png");

    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    if(frameCount % 60 === 0){
     World.remove(world, this.body);
    }
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(5);
    stroke("orange");
    fill("yellow");
    image(this.image,0,0,this.radius+100,this.radius+100);
    pop();
  }
}
