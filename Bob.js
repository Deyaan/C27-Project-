class bob {
    constructor(x,y,radius) {
      var options = {
          isStatic:true,
       restitution:0.1,
       friction:1.4,
       density:1.2,
      }
      this.radius=70;
      this.body = Bodies.circle(x,y,this.radius,options);
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle =this.body.angle;
        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0, 0, this.radius);
        pop();
    }
  };