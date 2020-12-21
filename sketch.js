var wall;//Wall
var car;//Car
var speed;//Speed
var weight;//Weight

function setup() {
  createCanvas(1300,400);
  
  speed=random(55,90);
  weight=random(400,1200);

  wall=createSprite(1200,200,60,height/2);
  wall.shapeColor=color(80,80,80);

  car=createSprite(50,200,50,50);
  car.velocityX=speed;
}

function draw() {
  background("black");

  if(wall.x-car.x<car.width+wall.width)
  {
    car.velocityX=0;

    var deformation=(0.5*speed*speed*weight)/22500;//Deformation

    if(deformation>=180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>=100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}