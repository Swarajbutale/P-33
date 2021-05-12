const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var snowFall;
var boy;
var snowFalls = [];

function preload() {
  bgImg = loadImage("snow1.jpg");
  //boyImg = loadImage("")
  boyImg = loadImage("bj2.png");
}

function setup() {
  createCanvas(800,400);
  boy = createSprite(500, 300, 50, 50);
  boy.addImage(boyImg);
  boy.scale=0.5;

   engine = Engine.create();
   world = engine.world;
}

function draw() {
  background(bgImg); 
  Engine.update(engine);

  if (frameCount%30===0) {
    snowFalls.push(new SnowFall(random(0,800),20))
    
  }

  for (var s =0; s< snowFalls.length; s++) {
    snowFalls[s].display();
  } 

  if(keyWentUp("space")) {
    boy.y=300;
  }

  if(keyWentDown("space")) {
    boy.y=250;
  }

  fill(0);
  textSize(28);
  text("Press 'Space' to Jump",500,50);

  drawSprites();
}