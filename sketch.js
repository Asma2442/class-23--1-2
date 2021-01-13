//Renaming
const Engine = Matter.Engine 
const World = Matter.World 
const Bodies = Matter.Bodies

function setup(){
  createCanvas(400,400);
  //creating our engine
  engine = Engine.create()
  //creating our world inside engine
  world = engine.world

  ground = new Ground(200,390,400,20)

  box1 = new Box(100,200,50,50)
  box2 = new Box(140,100,50,50)
}

function draw(){
  background(0);

  Engine.update(engine)

  ground.display()
  box1.display()
  box2.display()
}
