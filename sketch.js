
var bgimg
var splashimage,playButton,aboutButton
var gameState="wait"
var playButton,bgimg,ground,groundimage

function preload(){
splashimage = loadImage('Treasure Titans.gif')
bgimg = loadImage('backgroundImage.png')
groundimage = loadImage('ground.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  playButton=createImg("playnew.png")
  // playButton= createButton('Play');
  playButton.position(width/4,height/2)
  playButton.size(200,200)

  aboutButton=createImg("about.png")
  //aboutButton=createButton('About');
  aboutButton.position(width/4+400,height/2)
aboutButton.size(170,180)


ground=createSprite(width/2, height-73,width*2)
ground.addImage(groundimage)
ground.x=width/2
ground.scale=2


}


function draw() {
background(splashimage);
if(gameState=="wait"){
  background(splashimage);
  playButton.show()
  aboutButton.show()
  }
  
  playButton.mousePressed(()=>{
    gameState="play"
  
      
  })

  aboutButton.mousePressed(()=>{
    gameState="about"
  
      
  })


  if(gameState=="play"){
    background(bgimg)
    playButton.hide()
    aboutButton.hide()
    ground.velocityX=-2

    if(ground.x<=width/2.15){
      ground.x=width/2
    }
}

if(gameState=="about"){
 
  aboutgame()
  playButton.hide()
  aboutButton.hide()
}



drawSprites()
}




function aboutgame() {
  swal({
      title: "HOW TO PLAY THE GAME !!!",
      text: "The aim of the game is to collect the treasure",
      textAlign:"center",
      imageUrl: "rest-removebg-preview.png",
      imageSize: "200x200",
      confirmButtonText: "LET  THE TREASURE TITAN BEGIN!!",
      confirmButtonColor: "green"
  },
      function () {
          gameState = "wait"
      }
  )


}