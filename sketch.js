var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var myEngine, myWorld;
var invisibleGround;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	//fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//fairyVoice.play();
		
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	invisibleGround = createSprite(130, 520, 2000, 40);
	invisibleGround.visible = false;

	myEngine = Engine.create();
	myWorld = myEngine.world;
	
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(myWorld, starBody);

	Engine.run(myEngine);
	console.log(star);
}


function draw() {
  background(bgImg);
  Engine.update(myEngine);
  
  keyPressed();
  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyDown("left_ARROW")){
		fairy.velocityX = -4;
		}
	
	if(keyDown("right_ARROW")){
	   fairy.velocityX = 4;
		}

	if(keyDown("down_ARROW")){
		fairy.velocityX = 0;
		star.velocityY = 4;
	}

	if(star.isTouching(invisibleGround)){
		star.velocityY = 0;
	}
}
