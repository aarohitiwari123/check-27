const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constrained = Matter.Constraint
var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;
var bob1Diameter;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(385,200,230,25);
	bob1 = new Bob(300,400,40);
	bob2 = new Bob(340,400,40);
	bob3 = new Bob(380,400,40);
	bob4 = new Bob(420,400,40);
	bob5 = new Bob(460,400,40);
	rope1 = new Rope(bob1.body,roof1.body,-bob1Diameter*2,0);
	rope2 = new Rope(bob2.body,roof1.body,-bob1Diameter*2,0);
	rope3 = new Rope(bob3.body,roof1.body,-bob1Diameter*2,0);
	rope4 = new Rope(bob4.body,roof1.body,-bob1Diameter*2,0);
	rope5 = new Rope(bob5.body,roof1.body,-bob1Diameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,13,233);
  

   roof1.display();
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();

  drawSprites();
 
}



