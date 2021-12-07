
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;
var trash;

function preload()
{
	
}

function setup() {
	createCanvas(1348, 613);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(674, 600, 1348, 20);
	left = new Ground(950, 540, 15, 100);
	right = new Ground(1150, 540, 15,100);
	trash = new Ground(1050, 600, 150, 20);

	var ball_options={
		isStatic: false,
        restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	ball = Bodies.circle(200, 100, 50, ball_options);
	World.add(world, ball);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(ball.position.x, ball.position.y, 50, 50);
  
  ground.show();
  left.show();
  right.show();
  trash.show();


}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:500, y:-500});
	}

	
}



