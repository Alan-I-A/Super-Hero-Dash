const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backImg;
var supHero,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;

function preload()
{
  //preload the images here

  backImg = loadImage("GamingBackground.png");
}

function setup()
{
  createCanvas(3000, 800);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  // create sprites here

  ground = new Ground(600,600,1200,20);

  supHero = new Hero(50,50,0);

  b1 = new Block(500,520,15,15);
  b2 = new Block(500,535,15,15);
  b3 = new Block(500,545,15,15);
  b4 = new Block(500,555,15,15);
  b5 = new Block(500,565,15,15);
  b6 = new Block(500,575,15,15);
  b7 = new Block(500,585,15,15);
  b8 = new Block(515,520,15,15);
  b9 = new Block(515,535,15,15);
  b10 = new Block(515,545,15,15);
  b11 = new Block(515,555,15,15);
  b12 = new Block(515,565,15,15);
  b13 = new Block(515,575,15,15);
  b14 = new Block(515,585,15,15);
  b15 = new Block(530,520,15,15);
  b16 = new Block(530,535,15,15);
  b17 = new Block(530,545,15,15);
  b18 = new Block(530,555,15,15);
  b19 = new Block(530,565,15,15);
  b20 = new Block(530,575,15,15);

  Engine.run(engine)
}

function draw()
{
  //background(0);

  background.addImage(backImg);

  ground.display();

  supHero.display();

  b1.dsplay();
  b2.dsplay();
  b3.dsplay();
  b4.dsplay();
  b5.dsplay();
  b6.dsplay();
  b7.dsplay();
  b8.dsplay();
  b9.dsplay();
  b10.dsplay();
  b11.dsplay();
  b12.dsplay();
  b13.dsplay();
  b14.dsplay();
  b15.dsplay();
  b16.dsplay();
  b17.dsplay();
  b18.dsplay();
  b19.dsplay();
  b20.dsplay();
}

function mouseDragged()
{
  Matter.Body.setPosition(supHero.body, {x:mouseX, y:mouseY});
}

