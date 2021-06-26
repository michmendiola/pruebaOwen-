//Clase 23 act para alumno
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

  box1=new Box(200,340,50,50);
  box2=new Box(230,100,40,100);
  ground = new Ground (200,height,400,30);
}

function draw(){
  background("pink");
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}

/*
//-------Clase 23 act para profesor

class Box {
constructor(x,y,width,height){
    var options={
        'restitution': 0.8,
        'friction':0.3,
        'density':1.0
    }
this.body= Bodies.rectangle(x,y,width,height, options);
this.width=width;
this.height=height;

World.add(world,this.body);
}
display (){
    var pos=this.body.position;
    var angle =this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill (255);
    rect (0,0,this.width,this.height);
    pop();
}
};




//-------- Clase 22 act para alumno
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var ball;

function setup(){
  var canvas = createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ground_options={
    isStatic: true
  }

  ground= Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

  var ball_options={
    restitution: 1
  }

  ball=Bodies.circle(200,100,20, ball_options);
  World.add(world,ball);


  console.log(ground);
  
}

function draw(){
  background("pink");
  Engine.update(engine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}

//-------Clase 22 actividad para profesor 

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