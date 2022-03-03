var sprite
function setup() {
  createCanvas(800,800);
  sprite=createSprite(200,200,10,10)
}

function draw() 
{
  background(30);
if(keyDown("right"))
{sprite.x=sprite.x+1}
if(keyDown("left"))
{sprite.x=sprite.x-1}
if(keyDown("down"))
{sprite.y=sprite.y+1}
if(keyDown("up"))
{sprite.y=sprite.y-1}
drawSprites()
}




