var canvas;
var music;
var block1;
var block2;
var block3;
var block4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){

canvas = createCanvas(800,600);

block1= createSprite (100,600,150,50);
block1.shapeColor=("blue")

block2= createSprite (300,600,150,50);
block2.shapeColor=("orange")

block3= createSprite (500,600,150,50);
block3.shapeColor=("purple")

block4= createSprite (700,600,150,50);
block4.shapeColor=("green")

ball= createSprite (200,200,40,40);
ball.shapeColor=("white")
ball.velocityX=8
ball.velocityY=2



    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
 edges=createEdgeSprites();
  ball.bounceOff(edges);

  
if(touching(ball,block1)){
ball.shapeColor="blue";
bouncingOff(ball,block1)
music.play();
}
if(touching(ball,block2)){
    ball.shapeColor="orange";
    bouncingOff(ball,block2)
    music.play();
    }
    if(touching(ball,block3)){
        ball.shapeColor="purple";
        bouncingOff(ball,block3)
        music.play();
        }
        if(touching(ball,block4)){
            ball.shapeColor="green";
            colliding(ball,block4)
            music.play();
            }
   
    drawSprites();

    //add condition to check if box touching surface and make it box
}

