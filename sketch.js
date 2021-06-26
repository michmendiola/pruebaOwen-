const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var box1, pig1; 


function setup(){
  var canvas = createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;

  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  ground = new Ground (600,height,1200,20);
  pig1=new Pig(810,350);
  log1 =new Log(810,260,300, PI/2);
/*
  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  pig3=new Pig(810,220);
  log3 =new Log(810,180,300, PI/2);
  */
}

function draw(){
  background("pink");
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  /*
  box3.display();
  box4.display();
  pig3.display();
  log3.display();
*/



}



/*
//Paso 3: Explicar y agregar elementos de motor físico 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//Paso 4: Crear mundo
var engine, world;

function setup(){
  //Paso 2: crear canvas
  var canvas= createCanvas(400,400);

  //Paso 4: Crear mundo 
  engine=Engine.create();
  world=engine.world;

  var object_options={
    isStatic:true
  }
  //Paso 5: crear objeto 
  object= Bodies.rectangle(200,100,50,50, object_options);
  World.add(world,object);
  console.log(object);
  }
  
  
  function draw(){
  background ("pink");
  //Paso 6: actualizar motor 
  Engine.update(engine);

  //Paso 3: centrar rect
  rectMode(CENTER);

  //Paso 2: crear rect
  //Paso 6: unir rect con objeto
  rect (object.position.x,object.position.y,50,50);
  }
*/