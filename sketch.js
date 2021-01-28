const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;

function preload(){
    bgImage = loadImage("sprites/background.jpg");
}

function setup(){
  var canvas = createCanvas(800,600);

  myEngine=Engine.create();
  myWorld = myEngine.world;

  ball = new Ball(-450,-500,100,100);
  chain = new SlingShot(ball.body,{x:400,y:-500});

  ground1 = new Ground(400,450,300,15);

  //1st floor
  box1 = new Box(400,400,50,50);
  box2 = new Box(350,400,50,50);
  box3 = new Box(450,400,50,50);
  box4 = new Box(300,400,50,50);
  box5 = new Box(500,400,50,50);
  
  //monster
  box6 = new Box(500,350,100,100);
  
  //2nd floor
  box7 = new Box(325,350,50,50);
  box8= new Box(375,350,50,50);
  box9 = new Box(425,350,50,50);
  
  //3rd floor
  box10 = new Box(350,300,50,50);
  box11 = new Box(400,300,50,50);

  //4th floor
  box12 = new Box(375,250,50,50);

  box6.image=loadImage("sprites/monster.png");



}
function draw(){
  background(bgImage);
  Engine.update(myEngine);

  
  chain.display();
  ball.display();
  ground1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();

  box7.display();
  box8.display();
  box9.display();
  
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  
}