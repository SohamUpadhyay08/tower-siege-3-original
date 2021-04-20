class Box{
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visibility=255;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<6){
      var pos =this.body.position;
      push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
      }
      else
      {
        World.remove(world,this.body);
        push();
        this.Visibility=this.Visibility-5;
        tint(255,this.Visibility)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
      }
    }
  };