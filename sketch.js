const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(200,200,50,50);   
    box2=new Box(230,50,70,140);  
    Ground=new ground(200,375,400,30);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display(); 
    Ground.display();
}

