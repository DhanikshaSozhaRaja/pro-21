var bullet,wall,speed,weight;

function setup() {
  createCanvas(800,400);
  bullet=createSprite(200,200,20,5);
  bullet.shapeColor="white";
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  wall=createSprite(500,200,60,height/2);
  wall.shapeColor="grey";
}

function draw() {
  background("black");
  bullet.velocityX = speed;
    if(wall.x-bullet.x<(bullet.width+wall.width)/2)
    {
      bullet.velocity=0;
      var deformation=0.5*weight*speed*speed/22500;
      
      if (deformation<180&&deformation>10)
      {
        wall.shapeColor="green"
      }
      if (deformation<10)
      {
        wall.shapeColor="red"
      }
    }
  drawSprites();
}