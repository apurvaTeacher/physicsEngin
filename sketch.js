const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myworld,myengine,ground,ball;

function setup(){
  var canvas=createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;
  
  var objprop = {
    isStatic:true
  }

  ground = Bodies.rectangle(180,380,400,20,objprop);
  World.add(myworld,ground);

  var boucprop = {
    restitution: 1.0
  }
  ball = Bodies.rectangle(200,100,20,20,boucprop);
  World.add(myworld,ball);

  
// yes mam
  console.log(ground);



}
function draw()
{
  background(0);
  
  Engine.update(myengine);
  
  rectMode(CENTER);
  rect(ball.position.x,ball.position.y,20,20)
  //rect(200,200,50,50);
  rect(ground.position.x,ground.position.y,400,20);
  
  //restitution = 1.0
}
