const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow1, snow2, snow3, snow4, girl, girlImg, bgImg;
var bg = "snow1.jpg";

function preload(){
girlImg = loadImage("girl.png");
bgImg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  snow1 = new Snow(150, 150, 30, 30);
  snow2 = new Snow(300, 200, 30, 30);
  snow3 = new Snow(450, 150, 30, 30);
  snow4 = new Snow(550, 200, 30, 30);
  
  girl = createSprite(250, 350, 50, 50);
  girl.addImage(girlImg);

}

function draw() {
  background(bgImg);  
  Engine.update(engine);

  girl.scale = 0.3;
  girl.velocityX = 4;
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();

  drawSprites();
}