const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var box1; 

function setup(){
  var canvas = createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  box1=new Box(200,100,50,50);
  
}

function draw(){
  background("pink");
  Engine.update(engine);
  box1.display();
}