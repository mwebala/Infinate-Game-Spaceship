var starship,shipImg,star_group;
var stars,starImg;
var gamestate = "play";
var star,star1,star2,star3;
var edges;





function preload(){
shipImg = loadImage("starship.png");
starImg = loadImage("star.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight);

 starship = createSprite(windowWidth/2,windowHeight-30,50,50);
 starship.addImage(shipImg);
 starship.scale = 0.25

 star_group = new Group();
 star_group.setLifetimeEach(-1)

 var rand = Math.round(random(1,100))

 edges = createEdgeSprites();
 starship.collide(edges[4,2])


}

function draw() {
    background(0)


    if(gamestate ==="play"){
        spawnStars();
    } 
    else if(gamestate === "restart"){
        starship.y = windowHeight-30
        gamestate ="play"
       
    }
    else if(gamestate==="end"){
        star_group.destroyEach();
        textSize(60);
       textAlign(CENTER)
        fill("white")
        strokeWeight(10)
        text("YOU HAVE MADE IT!",windowWidth/2,windowHeight/2);
        text("Congratulations",windowWidth/2,windowHeight/2 + 60);  
        textSize(40)
        text("(Even I couldn't make it!)",windowWidth/2,windowHeight/2+100)
      }

    spawnStars();

    if(star_group.isTouching(starship)){
        gamestate = "restart"
    }

    if(keyDown("UP")){
        starship.y-=7
    } if(keyDown("LEFT")){
        starship.x-=7
    }if(keyDown("RIGHT")){
        starship.x+=7
    }
    if(starship.y<=0){
        gamestate = "end"
    }




    drawSprites();
}

function spawnStars(){
    if(frameCount%16==0){
        star = createSprite(Math.round(random(0,800),Math.round(random(-23,100)),10,10));
        star.addImage("star",starImg);
        star.velocityY = 13;
        star.scale = 0.012;
        star.lifetime = 300;
        star_group.add(star)

        star1 = createSprite(Math.round(random(0,1600),Math.round(random(-23,100)),10,10));
        star1.addImage("star",starImg);
        star1.velocityY = 13;
        star1.scale = 0.012;
        star1.lifetime = 50;
        star_group.add(star1)

        star2 = createSprite(Math.round(random(0,1800),Math.round(random(-23,100)),10,10));
        star2.addImage("star",starImg);
        star2.velocityY = 13;
        star2.scale = 0.012;
        star2.lifetime = 300;
        star_group.add(star2)

        star3= createSprite(Math.round(random(0,2400),Math.round(random(-23,100)),10,10));
        star3.addImage("star",starImg);
        star3.velocityY = 13;
        star3.scale = 0.012;
        star3.lifetime = 300;
        star_group.add(star3)
        
        
    }
}
