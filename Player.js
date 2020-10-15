class Player {
    constructor(x, y) {
      var options = {
           isStatic:false,
          'restitution':0.1,
          'friction':0.1,
          'density':0.5
      }
      this.body = Matter.Bodies.circle(x, y, 20, options);
      this.radius = 20;
      this.x = x;
      this.y = y;

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      camera.position.x = this.body.x;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(3);
      stroke("orange");
      fill(255);
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  }
  