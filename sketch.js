
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof();

	bob1 = new bob(200, 400, 70);
	bob2 = new bob(270, 400, 70);
	bob3 = new bob(340, 400, 70);
	bob4 = new bob(410, 400, 70);
	bob5 = new bob(480, 400, 70);

	rope1 = new rope(bob1.body, roof1.body, 0, 5);
	rope2 = new rope(bob2.body, roof1.body, 70, 5);
	rope3 = new rope(bob3.body, roof1.body, 130, 5);
	rope4 = new rope(bob4.body, roof1.body, 200, 5);
	rope5 = new rope(bob5.body, roof1.body, 280, 5);

	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	background("red");
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

	motion();

	drawSprites();

}

function motion() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(bob1.body, bob1.body.position, { x: 370, y: -85 });
	}
}

