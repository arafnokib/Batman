
        

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var man;



function setup() {
  createCanvas(800,700);
  
  
  engine =Engine.create();

  world = engine.world;
  ground = new Ground(width/2,height - 10,width,20)
  //drop = new Rain(100,100,03)
  man = new Umbrella(100,760,10,10)

  
    }
    
    function draw(){
      background(0)
      Engine.update(engine)
      //drop.display();
      ground.display();
      man.display();

      if (frameCount%05 === 0){
        drops.push(new Rain((random(100, 700)), 0, 03))
      }


      for (var i = 0; i < drops.length; i++){
        drops[i].display();
      }

      
    }