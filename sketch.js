var polygonimg, ball, ground,stand1,stand2,slingShot
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16
var block1,block2,block3,block4,block5,block5,block6,block7,block8,block9
var score=0

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg

function preload(){
polygonimg=loadImage("polygon.png")    
GetBackground()
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(450,380,900,20)
stand1=new Stand(390,300,250,10)
stand2=new Stand(700,200,200,10)
ball=Bodies.circle(50,200,20,{isStatic:false})
World.add(world,ball)
slingShot=new SlingShot(this.ball,{x:100,y:200})
//level 1
box1=new Box(300,275,30,40)
box2=new Box(330,275,30,40)
box3=new Box(360,275,30,40)
box4=new Box(390,275,30,40)
box5=new Box(420,275,30,40)
box6=new Box(450,275,30,40)
box7=new Box(480,275,30,40)
//level 2
box8=new Box(330,235,30,40)
box9=new Box(360,235,30,40)
box10=new Box(390,235,30,40)
box11=new Box(420,235,30,40)
box12=new Box(450,235,30,40)
//lvl 3
box13=new Box(360,195,30,40)
box14=new Box(390,195,30,40)
box15=new Box(420,195,30,40)
//lvl 4
box16=new Box(390,155,30,40)

//stand 2
//lvl 1
block1=new Box(640,175,30,40)
block2=new Box(670,175,30,40)
block3=new Box(700,175,30,40)
block4=new Box(730,175,30,40)
block5=new Box(760,175,30,40)
//lvl 2
block6=new Box(670,135,30,40)
block7=new Box(700,135,30,40)
block8=new Box(730,135,30,40)
//lvl 3
block9=new Box(700,95,30,40)

}

function draw(){
    if(bg!=undefined){background(bg)}

Engine.update(engine)
ground.display()
stand1.display()
stand2.display()
slingShot.display()

textSize(15); 
stroke("lightyellow"); 
text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

textSize(20)
    fill ("white")
    text("score"+score,750,40)

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();

imageMode (CENTER)
image (polygonimg,ball.position.x,ball.position.y,40,40)

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
} 
async function GetBackground(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Calcutta")
    var responseJson=await response.json()
    var datetime=responseJson.datetime
    var hour=datetime.slice(11,13)

    if(hour>=06&&hour<=19){
        bg="lightblue"

    }
    else{
    bg="grey"   
    }
    console.log(bg)
} 