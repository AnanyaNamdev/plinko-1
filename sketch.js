const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2, 790, width, 20);

  for(var d = 0; d <= width; d = d+80) {
      divisions.push(new Division(d, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var p = 40; p <= width; p = p+50) {
    plinkos.push(new Plinko(p, 75));
  }

  for(var p = 15; p <= width-10; p = p+50) {
    plinkos.push(new Plinko(p, 175));
}

  for(var p = 40; p <= width; p = p+50) {
    plinkos.push(new Plinko(p, 275));
  }

  for(var p = 15; p <= width-10; p = p+50) {
    plinkos.push(new Plinko(p, 375));
  }


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  for (var j = 0; j < divisions.length; j++) {
    divisions[j].display();
  }

  for (var s = 0; s < divisions.length; s++) {
    plinkos[s].display();
  }
    
  drawSprites()
 
}