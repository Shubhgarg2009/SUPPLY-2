var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,soilder,enemy,bg,soliderIMG,enemyIMG;
var carrierLeftSprite,carrierRightSprite,carrierBottomSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{	
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	bgIMG=loadImage("bg.png")
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	carrierLeftSprite = createSprite(windowWidth/2-120, height-60, 30, 120)
	carrierLeftSprite.shapeColor = 'red'
	carrierRightSprite = createSprite(windowWidth/2+120, height-60, 30, 120)
	carrierRightSprite.shapeColor = 'red'
	carrierBottomSprite = createSprite(windowWidth/2, height-30, 220, 30)
	carrierBottomSprite.shapeColor = 'red'

	packageSprite=createSprite(600, 10, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, windowHeight/2-140, 20,20);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.7

	//soilder=createSprite(600, 570, 30, 60);
    //soliderIMG=loadImage("Untitled.png")
	//soilder.addImage(soliderIMG)
	





	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	groundSprite=createSprite(width/2, height-5, width,40);
	groundSprite.shapeColor=rgb(175, 112, 3)

	//Create a Ground
	ground = Bodies.rectangle(windowWidth/2, windowHeight-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgIMG);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 



  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false);
 }
}