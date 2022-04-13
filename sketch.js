var menino
var rua
var rua_image
var menino_image



function preload(){
  menino_image=loadAnimation("Runner-1.png","Runner-2.png")
  rua_image=loadImage("path.png");




}


function setup(){
  createCanvas(400,400);
  rua=createSprite(200,200,10,10);
  rua.addImage(rua_image);
  rua.velocityY=3;
  menino=createSprite(200,370,10,10);
  menino.addAnimation("menino",menino_image);
  menino.scale=0.05
  edges=createEdgeSprites();
}

function chao_se_mexe(){
  if(rua.y>=400){
    rua.y=400-height/2;
  }
}



function draw(){
  background("white");
  chao_se_mexe();
  menino.x=mouseX;
  menino.collide(edges);





  drawSprites();
}
















