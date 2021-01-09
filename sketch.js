//Create variables here
var dog, happyDog,food,foodStock,dogImage;
var database,foodS;
var lastFed, fedTime, addFood,feed,name,foodObj;
function preload()
{
  //load images here
  dogImage=loadImage('images/dogImg.png');
  happyDog=loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(700, 800);
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImage);
  dog.scale=0.2
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  fedTime=database.ref('fedTime');
  fedTime.on("value",function(data){
lastFed=data.val();
  })
  Feed = createButton('Feed the dog');
  Feed.position(500,100);
  Feed.mousePressed(feedDog);
  Name = createInput("Pet name")
  Name.position(400,150)
  addFood = createButton("Add Food");
  addFood.position(400,100);
  addFood.mousePressed(addFood);

}

function draw() {  

  background(46,139,87)
 
  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
  }
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed :"+lastFed%12+"PM", 350,30)
  }else if(lastFed===0){
    text("Last Feed : 12 AM",350,30)
  }else{
    text("Last Feed : "+ lastFed + "2AM",350,30)
  }
  
    drawSprites();
    textSize(22);
    fill("yellow");
    text("Remaining food "+foodS,160,150); 
    

  
  }
  function feedDog(){
    dog.addImage(happyDog)
    foodObj.updateFoodStock(food.getFoodStock()-1);
    database.ref('/'.update)({
      Food:getFoodStock(),
      FeedTime:hour
    })
  }
  
  function readStock(data){
    foodS=data.val();
  }
  function writeStock(x){
    if(x<=0){
     x=0;
    }else{
      x=x-1;
    }
    database.ref('/').update({
      'Food':x
    })
  }
  //add styles here




