//Create variables here
var dog;
var database;
var dogImg,dogImg1;
var foodStock;
var food1;

function preload()
{
	dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250);
  dog.addImage('dog1',dogImg);
  dog.addImage('dog2',dogImg1);
}


function draw() {  
  background(46, 139, 87)
 dog.scale = 0.5;
foodStock = database.ref("food");
foodStock.on("value",readStock);

if(keyDown(UP_ARROW)){
  writeStoke(food1);
  dog.changeImage('dog2',dogImg1);
}

  drawSprites();
  fill("white");
  textSize(15);
 text("Press UP_ARROW to feed the dog.",250,50);
 text("Food");

 

}

function readStock(data){
food1 = data.val();
}

function writeStoke(x){

 if(x <= 0){
   x = 0;
 }
 else{
   x=x-1;
 }
  database.ref('/').update({
    food:x
  })
  
}


