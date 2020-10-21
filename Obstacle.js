class Obstacle {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          'restitution':0.1,
          'friction':0.1,
          'density':0.5
      }
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(3);
      stroke(255,100,100);
      fill(100);
      rect(0,0,this.width,this.height);
      pop();
    }
  }
  