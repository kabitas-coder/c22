const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var box_options={
        restitution:1
    }
    box=Bodies.rectangle(200,200,15,15,box_options);
    World.add(world,box);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("yellow")
    rect(ground.position.x,ground.position.y,400,20);
    rectMode(CENTER);
    fill("orange")
    rect(box.position.x,box.position.y,15,15);
}