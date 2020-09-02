var hour;
var minute;
var second;

function setup() {
  createCanvas(800,400);
  hr=hour();
  mn=minute();
  sc=second();
  hour=new Hours();
  minute=new Minutes();
  second=new Seconds();

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  hour.display();
  hrAngle=map(hr,0,60,0,360);
  minute.display();
  mnAngle=map(mn,0,60,0,360);
  second.display();
  scAngle=map(sc,0,60,0,360);
  

  drawSprites();
}