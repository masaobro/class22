const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;
var mWorld, mEngine, mBody;

function setup() {
  createCanvas(800,400);

mEngine = Engine.create();
mWorld= mEngine.world;

moptions={
  isStatic: false,
  restitution:1,
}
mBody = Bodies.circle(400,200,20,moptions);
World.add(mWorld, mBody);
console.log(mBody.position.x,mBody.position.y);
 goptions ={
   isStatic: true,
 }

ground =Bodies.rectangle(400,390,800,20,goptions);
World.add(mWorld,ground);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(mEngine);
  background(0);  
  drawSprites();
  rectMode(CENTER);
  circle(mBody.position.x, mBody.position.y,40,40) ;
  rect(ground.position.x,ground.position.y,800,20);
  
}