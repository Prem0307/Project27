
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var rope;
var bob,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject;

function setup() {
	createCanvas(800, 900);


	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(350,100,300,30)

	//Create the Bodies Here.

	bobObject1 = new Bob(300,300,40,40)
	bobObject2 = new Bob(350,300,40,40)
	bobObject3 = new Bob(400,300,40,40)
	bobObject4 = new Bob(450,300,40,40)
	bobObject5 = new Bob(500,300,40,40)

	rope1 = new Rope(bobObject1.body,roofObject.body,-100);
	rope2 = new Rope(bobObject2.body,roofObject.body,-50);
	rope3 = new Rope(bobObject3.body,roofObject.body,0);
	rope4 = new Rope(bobObject4.body,roofObject.body,50);
    rope5 = new Rope(bobObject5.body,roofObject.body,100);


Engine.run(engine);
  
}


function draw() {
	
	Engine.update(engine);
  rectMode(CENTER);
  background("white");


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  
  bobObject2.display();
  
  bobObject3.display();
  
  bobObject4.display();
  
  bobObject5.display();
  roofObject.display();
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50})
	}
}



