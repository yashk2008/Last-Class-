var mazeW1, mazeW2, mazeW3, mazeW4, mazeW5, mazeW6, mazeW7, mazeW8, mazeW9, mazeW10, mazeW11, mazeW12, mazeW13, mazeW14, mazeW15
var mazeGroup
var kratos
var kratosimg
var gameState
var PLAY = 1
var END = 0
var gameOver
var gameOverimg
var restart
var restartimg

function createMaze() {
  kratos = createSprite(650, 700, 20, 20)
  kratos.addImage(kratosimg)
  kratos.scale = 0.10
  mazeW1 = createSprite(50, 400, 20, 650)
  mazeW1.shapeColor = "#39FF14"
  mazeW2 = createSprite(300, 725, 525, 20)
  mazeW2.shapeColor = "#39FF14"
  mazeW3 = createSprite(500, 680, 20, 100)
  mazeW3.shapeColor = "#39FF14"
  mazeW4 = createSprite(975, 725, 470, 20)
  mazeW4.shapeColor = "#39FF14"
  mazeW5 = createSprite(1200, 400, 20, 650)
  mazeW5.shapeColor = "#39FF14"
  mazeW6 = createSprite(975, 75, 470, 20)
  mazeW6.shapeColor = "#39FF14"
  mazeW7 = createSprite(300, 75, 525, 20)
  mazeW7.shapeColor = "#39FF14"
  mazeW8 = createSprite(1100, 420, 200, 20)
  mazeW8.shapeColor = "#39FF14"
  mazeW9 = createSprite(1000, 625, 100, 20)
  mazeW9.shapeColor = "#39FF14"
  mazeW10 = createSprite(1050, 575, 20, 90)
  mazeW10.shapeColor = "#39FF14"
  mazeW11 = createSprite(975, 525, 150, 20)
  mazeW11.shapeColor = "#39FF14"
  mazeGroup.add(mazeW1)
  mazeGroup.add(mazeW2)
  mazeGroup.add(mazeW3)
  mazeGroup.add(mazeW4)
  mazeGroup.add(mazeW5)
  mazeGroup.add(mazeW6)
  mazeGroup.add(mazeW7)
  mazeGroup.add(mazeW8)
  mazeGroup.add(mazeW9)
  mazeGroup.add(mazeW10)
  mazeGroup.add(mazeW11)
  //mazeGroup.add(mazeW12)
  //mazeGroup.add(mazeW13)
  //mazeGroup.add(mazeW14)
  //mazeGroup.add(mazeW15)
  //mazeGroup.add(mazew16)
  //mazeGroup.add(mazeW17)
  //mazeGroup.add(mazeW18)
  //mazeGroup.add(mazeW19)
  //mazeGroup.add(mazeW20)
  //mazeGroup.shapeColor = "neon"


}


function preload() {
  kratosimg = loadImage("Images/PCTransparent.png")
  restartimg = loadImage("Images/RestartButton.png")
  gameOverimg = loadImage("Images/GameOverimg.jpg")
}

function setup() {
  gameState = PLAY


  mazeGroup = new Group()

  createCanvas(1300, 800);
  
  gameOver = createSprite(650, 400)
  gameOver.addImage(gameOverimg)
  restart = createSprite(675, 500, 20, 20)
  restart.addImage(restartimg)
  restart.scale = 0.2
  createMaze()
 
}
function draw() {
  background("teal");

  if (gameState == PLAY) {
    restart.visible = false
    gameOver.visible = false



    //moving the player up and down and making the game mobile compatible using touches
    if (keyDown("UP_ARROW") || touches.length > 0) {
      kratos.y = kratos.y - 5

    }
    if (keyDown("DOWN_ARROW") || touches.length > 0) {
      kratos.y = kratos.y + 5
    }

    if (keyDown("LEFT_ARROW") || touches.length > 0) {
      kratos.x = kratos.x - 5
    }


    if (keyDown("RIGHT_ARROW") || touches.length > 0) {
      kratos.x = kratos.x + 5
    }

    if (mazeGroup.isTouching(kratos)) {
      //mazeGroup.collides(kratos)
      gameState = END
      mazeGroup.destroyEach()
      kratos.destroy()
    }


    //release bullets and change the image of shooter to shooting position when space is pressed
    if (keyWentDown("space")) {



    }

    //player goes back to original standing image once we stop pressing the space bar



    //destroy zombie when player touches it


    //calling the function to spawn zombies

  }


  if (gameState == END) {
    //textSize(30)
    // fill("red")
    // text("Game Over", 600,400)
    restart.visible = true
    gameOver.visible = true
    if (mousePressedOver(restart)) {
      gameState = PLAY
      createMaze()
    }
  }
  drawSprites();
}



//creating function to spawn zombies
function enemy() {
  if (frameCount % 50 === 0) {

    //giving random x and y positions for zombie to appear

  }

}
