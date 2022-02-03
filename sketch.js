const Engine = Matter.Engine;
  const World = Matter.World
  const Constraint = Matter.Constraint;
  const Bodies = Matter.Bodies;

var ball1,ball2,chain;

var engine,world;

function setup(){

  createCanvas(700,500)
   engine = Engine.create()
    world = engine.world;

   ball1=Bodies.circle(100,200,30,{restitution:0.5});
  World.add(world,ball1);

   ball2=Bodies.circle(350,200,30),{restitution:0.5};
  World.add(world,ball2);
  
ground=Bodies.rectangle(350,490,700,10,{isStatic:true})
World.add(world,ground)

var options={
  bodyA: ball1,
  bodyB: ball2,
  stiffness: 0,
  length: 100
 
}


 chain=Constraint.create(options);
World.add(world,chain)


}

function draw(){
background("lightblue")

Engine.update(engine);

rectMode(CENTER)
ellipseMode(RADIUS)

rect(ground.position.x,ground.position.y,700,10)

fill("pink")
ellipse(ball1.position.x,ball1.position.y,30);

fill("yellow")
ellipse(ball2.position.x,ball2.position.y,30);

fill('black')
line(ball1.position.x,ball1.position.y,ball2.position.x,ball2.position.y);
}

function mouseDragged(){
  ball2.position.x=mouseX;
  ball2.position.y=mouseY;
}






