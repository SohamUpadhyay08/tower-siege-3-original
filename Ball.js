/*class Ball{
    constructor(x,y,radius) {
      var options = {
         isStatic:false,
          'restitution':0.7,
          'friction':0.1,
          'density':1.2
      }
     this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("sprites/polygon.png")
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
      fill("yellow")
     imageMode(CENTER)
      image(this.image,0,0,this.radius,this.radius)
			pop()
    }
  };*/