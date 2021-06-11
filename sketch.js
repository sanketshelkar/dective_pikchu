var startimg
var start
var welcome
var title
var welcomeside
var music
var back
var wall
var wall2
var wall3
var wall4
var ash
var up
var down
var left
var right
var pick
var say
var textpro
var next
var thingkepper

function setup() {

  createCanvas(windowWidth,windowHeight);
  
  start = createButton("start")
  start.position(windowWidth/2,windowHeight/2)
  start.size(100,30)
  start.mousePressed(next)
  //sprite creating
  startimg = createSprite(windowWidth/2,windowHeight/2)
  welcome = createSprite(windowWidth/4,windowHeight/4)
  title = createSprite(windowWidth/2,windowHeight/20)
  welcomeside = createSprite(windowWidth/1.3,windowHeight/4)
  
}

function preload(){

   startimg1 = loadImage("start.jpg")
   welcome1 = loadImage("welcome.gif")
   title1 = loadImage("title.PNG")
   music = loadSound("game music.mp3")
   back1 = loadImage("back.jpeg")
   ash1 = loadImage("ash.gif")
   say1 = loadImage("say.gif")
   textpro1 = loadImage("text.png")
   thingkepper1 = loadImage("iteams.JPG")

}

function draw() {
  
  background("black")

  //scale
  startimg.scale = 3

  startimg.addImage(startimg1)
  welcome.addImage(welcome1)
  title.addImage(title1)
  welcomeside.addImage(welcome1)

drawSprites();

}

function next(){

  //destroying and playing sound
   start.hide();
   //music.play();
   //music.loop();
   welcome.destroy();
   welcomeside.destroy();
   title.destroy();
   startimg.destroy();

   //objects creating 
   back = createSprite(windowWidth/2,windowHeight/2)
   thingkepper = createSprite(windowWidth/2,windowHeight/1.10)
   //
   wall = createSprite(windowWidth/2,windowHeight/1,1400,10)
   wall2 = createSprite(windowWidth/2,windowHeight/300,1400,10)
   wall3 = createSprite(windowWidth/1,windowHeight/2,10,650)
   wall4 = createSprite(windowWidth/300,windowHeight/2,10,650)
   //
   wall.shapeColor = "red"
   wall2.shapeColor = "red"
   wall3.shapeColor = "red"
   wall4.shapeColor = "red"
   //
   ash = createSprite(windowWidth/30,windowHeight/1.1)
   //
   say = createSprite(windowWidth/4,windowHeight/2)
   textpro = createSprite(windowWidth/2,windowHeight/2)
   next = createButton("Start")
   next.size(100,30)
   next.position(windowWidth/2,windowHeight/1.9)
   next.mousePressed(fow)


   //scale
   back.scale = 2
   ash.scale = 0.5
   textpro.scale = 0.2
   thingkepper.scale = 0.5

   //image adding
   back.addImage(back1)
   ash.addImage(ash1)
   say.addImage(say1)
   textpro.addImage(textpro1)
   thingkepper.addImage(thingkepper1)

   //ash movement
   up = createButton("🢁")
   up.position(windowWidth/10,windowHeight/1.4)
   up.size(50,30)
   up.mousePressed(moveup)

   down = createButton("🢃")
   down.position(windowWidth/10,windowHeight/1.2)
   down.size(50,30)
   down.mousePressed(mouvedown)

   right = createButton("🢂")
   right.position(windowWidth/7,windowHeight/1.3)
   right.size(50,30)
   right.mousePressed(moveright)

   left = createButton("🢀")
   left.position(windowWidth/17,windowHeight/1.3)
   left.size(50,30)
   left.mousePressed(moveleft)

   //picking
   pick = createButton("✋ PICK")
   pick.position(windowWidth/1.2,windowHeight/1.3)
   pick.size(50,50)

   //bug fixing
   ash.bounceOff(wall)
   ash.bounceOff(wall2)
   ash.bounceOff(wall3)
   ash.bounceOff(wall4)

}

function fow (){

  say.destroy();
   textpro.destroy();
   next.hide();

}

function moveup(){

  ash.y = ash.y - 50

}

function mouvedown(){

  ash.y = ash.y + 50

}

function moveright(){

  ash.x = ash.x + 50

}

function moveleft(){

 ash.x = ash.x - 50

}
  
    
  


