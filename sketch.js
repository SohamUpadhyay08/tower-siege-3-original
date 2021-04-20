


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg

var polygon,polygonImage
var bg = "night.png"




function preload(){
  polygonImage = loadImage("polygon.png")
  getBackgroundImage();
}



function setup() {
  createCanvas(1200,700);
  

  engine = Engine.create();
	world = engine.world;




  block1 = new Box(370, 540,40,60);
	block2 = new Box(410, 540,40,60);
	block3 = new Box(450, 540,40,60);
	block4 = new Box(490, 540,40,60);
	block5 = new Box(530, 540,40,60);
	block6 = new Box(570, 540,40,60);
	block7 = new Box(610, 540,40,60);
	block8 = new Box(410, 480,40,60);
	block9 = new Box(450, 480,40,60);
	block10 = new Box(490, 480,40,60);
	block11 = new Box(530, 480,40,60);
	block12 = new Box(570, 480,40,60);
	block13 = new Box(450, 420,40,60);
	block14 = new Box(490, 420,40,60);
	block15 = new Box(530, 420,40,60);
	block16 = new Box(490, 360,40,60);

	block17 = new Box(860, 340,40,60);
	block18 = new Box(900, 340,40,60);
	block19 = new Box(940, 340,40,60);
	block20 = new Box(980, 340,40,60);
	block21 = new Box(1020, 340,40,60);
	block22 = new Box(900, 280,40,60);
	block23 = new Box(940, 280,40,60);
	block24 = new Box(980, 280,40,60);
	block25 = new Box(940, 220,40,60);

  


  slate1 = new Ground(490,570,350,10);
  slate2 = new Ground(940,370,250,10);

  //polygon = new Ball(100,200,15)

  polygon = Bodies.circle(100, 400, 25);
	World.add(world, polygon);


  slingshot = new SlingShot(polygon,{x:150,y:300});

  

  
  ground = new Ground(600,690,1200,10)

  
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
}
  Engine.update(engine);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  slate1.display();
  slate2.display();
  ground.display();
  //polygon.display();
  imageMode(CENTER);
  image(polygonImage, polygon.position.x, polygon.position.y, 50, 50);
  slingshot.display();

  textSize(40);
  fill("blue");
  strokeWeight(6);
  text("Press Space Key To Get Another Chance ",210,100);
  textSize(40);
  fill("black");
  strokeWeight(6);
  text("Hit All The Boxes In 6 Chances And Be The LEGEND!! ",110,650);

  
}


    function mouseDragged() {
      Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
    }
    
    function mouseReleased() {
      slingshot.fly();
    }

    function keyPressed(){
      if(keyCode === 32){
          slingshot.attach(polygon);
          Matter.Body.setPosition(this.polygon, {x:100, y:400});
      }
  }


  async function getBackgroundImage(){
    
    var response =  await fetch(" http://worldtimeapi.org/api/timezone/Australia/Sydney");
    var JSONresponse = await response.json();
    var dateTime = JSONresponse.datetime;
    var hour = dateTime.slice(11,13);
    console.log(hour)
    if(hour>=06 && hour<19){
        bg = "day.png"
    }
    else
    {
        bg = "night.png"
    }
    backgroundImg = loadImage(bg);
}
  


	
