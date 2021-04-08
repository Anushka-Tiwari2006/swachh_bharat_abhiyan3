var r1,r2,r3,ground,junk, back;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var garbage,dust;

function preload()
{
	
back = loadImage("junk.png");
dust = loadImage("dustbingreen.png")



}

function setup() {
	createCanvas(800, 700);

 


	engine = Engine.create();
	world = engine.world;

  

	ground = new Ground(600,height,1200,20)
	r1= new Dustbin(600,680,200,20);
	r2=new Dustbin(500,615,20,150);
    r3=new Dustbin(700,615,20,150);

   junk = new Paper(70,600,60) ;
   launch = new Launcher(junk.body,{x:120,y:250})

   garbage = createSprite(600,600,20,20);
  garbage.addImage(dust);
  garbage.scale = 0.55;
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(back);
  

  
  
  r1.display();
  r2.display();
  r3.display();
  ground.display();
  junk.display();
  launch.display();
  drawSprites();
  

}









function mouseDragged(){


  Matter.Body.setPosition(junk.body,{x:mouseX,y:mouseY})

}



function mouseReleased(){


launch.fly();


}

