const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(900,400);
  
  engine = Engine.create();
  world = engine.world

  ground = new Ground();

  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);

  //first level
  Block1 = new Block(280, 275, 20, 20);
  Block2 = new Block(220, 275, 20, 20);
  Block3 = new Block(340, 275, 20, 20);
  Block4 = new Block(370, 275, 20, 20);
  Block5 = new Block(400, 275, 20, 20);
  Block6 = new Block(430, 275, 20, 20);
  Block7 = new Block(460, 275, 20, 20);
  Block8 = new Block(490, 275, 20, 20);

  //second level
  Block9 = new Block(310, 235, 20, 20);
  Block10 = new Block(340, 2, 20, 20);
  Block11 = new Block(370, 2, 20, 20);
  Block12 = new Block(400, 2, 20, 20);
  Block13 = new Block(430, 2, 20, 20);
  Block14 = new Block(460, 2, 20, 20);

  //third level
  Block15 = new Block(340, 195, 20, 20);
  Block16 = new Block(370, 195, 20, 20);
  Block17 = new Block(400, 195, 20, 20);
  Block18 = new Block(430, 195, 20, 20);
  
  //fourth level
  Block19 = new Block(370, 155, 20, 20);
  Block20 = new Block(400, 155, 20, 20);

  //fifth level
  Block21 = new Block(385, 115, 20, 20);
 
  polygon1 = new Hexagon(200, 20, 20, 20);

  slingshot1 = new SlingShot(this.polygon1,{x:200,y:200});
}

function draw() {
  background(255,255,255); 
  Engine.updates(engine);
  
  strokeWeight(2);
  stroke(15);
  stand1.display();
  stand2.display();

  stroke(15);
  fill ("blue")
  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block15.display();
  Block16.display();
  Block17.display();
  Block18.display();
  Block21.display();

  stroke(15);
  fill ("pink")
  Block9.display();
  Block10.display();
  Block11.display();
  Block12.display();
  Block13.display();
  Block14.display();
  Block19.display();
  Block20.display();

  slingshot1.display();
  polygon1 .display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  SlingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
  SlingShot.attach(this.polygon);}
}