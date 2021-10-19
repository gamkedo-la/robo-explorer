
const GRAVITY_PARTICLE_PER_CYCLE = 10;
var canvas, canvasContext;
var blueHero = new heroClass();
var rat = new ratClass();
var cockroach_egg = new cockroach_eggClass();
var bossEnemy = new bossClass();
var boyCocoon = new boyCocoonClass();
var trapList = [];
var waterList = [];
var CHEATS_ENABLED = true;

/************************GHOST VARIABLES***************************/
var ghostX = 75;
var ghostY = 75;
var ghostSpeedX = 5;
var ghostSpeedY = 7;

var monsterX = 75;
var monsterY = 75;
var monsterSpeedX = 5;
var monsterSpeedY = 7;

var camPanX = 0.0;
var camPanY = 0.0;


/*******************************FUNCTION FOR GHOST MOVEMENT********************************** */
function ghostReset() {
  ghostX = canvas.width / 2;
  ghostY = canvas.height / 1.5;
}

function ghostMove() {
  ghostX += ghostSpeedX;
  if (ghostX < 0 && ghostSpeedX < 0.0) {
    //left side
    ghostSpeedX *= -1;
  }
  if (ghostX > canvas.width && ghostSpeedX > 0.0) {
    // right side
    ghostSpeedX *= -1;
  }
  ghostY += ghostSpeedY;
  if (ghostY < 0 && ghostSpeedY < 0.0) {
    //top edge
    ghostSpeedY *= -1;
  }
  if (ghostY > canvas.height) {
    //bottom of the screen
    ghostSpeedY *= -1;
    // ghostReset();
  }
}

/**********************************PARTICLE CLASS********************************** */
function particleClass() {
  this.x = 75;
  this.y = 75;
  this.velX = 5;
  this.velY = 7;
  this.myColor;
  this.readyToRemove=false;
  // this.life=15+Math.random()*20;
  this.life=1+Math.random()*2;

  this.move = function () {
    if(this.life-- < 0){
      this.readyToRemove=true;
    }
    this.velY += GRAVITY_PARTICLE_PER_CYCLE;
    this.x += this.velX;
    this.y += this.velY;
    if (this.x < 0) {
      this.velX *= -1;
    }
    if (this.x > canvas.width) {
      this.velX *= -1;
    }
    if (this.y < 0) {
      this.velY *= -1;
    }
    if (this.y > canvas.height) {
      this.y -= this.velY;
       this.velY *= -0.3;//Dampen Velocity
      // this.velY *= -1;
    }
  };

  this.draw = function () {
    // particleCircle(this.x, this.y, 2, "yellow");
    particleCircle(this.x, this.y, 2,  this.myColor);
   
  };

} // end of particleClass def

// var oneParticle = new particleClass();
// var secondParticle = new particleClass();
var particleList = [];

/**********************************SLINGSHOT BULLET CLASS********************************** */
function slingShotClass() {
  this.x = 75;
  this.y = 75;
  this.velX = 5;
  this.velY = 7;
  this.readyToRemove=false;

  this.move = function () {
    this.x += this.velX;
    this.y += this.velY;
    if (this.x < 0) {
      this.readyToRemove= true;
    }
    if (this.x > canvas.width*1.2) { // reason why slingshot is not reaching right wall
      this.readyToRemove= true;
    }
    if (this.y < 0) {
      this.readyToRemove= true;
    }
    if (this.y > canvas.height) {
      this.readyToRemove= true;
    }
  };

  this.draw = function () {
     slingShotCircle(this.x, this.y, 5, "blue");
     
   /* const ROCK_HEIGHT = 2;
    const ROCK_WIDTH =2;
    canvasContext.drawImage(
      rockPic,
      rockPic.height, //size of frame
      this.x - blueHero.width / 2,
      this.y - blueHero.height / 2, //position on screen, centers image relative to self
      rockPic.height //size of image on screen
    );*/
    
  };
} // end of slingShot def

var slingShotList = [];


/**********************************BOMB LIST ARRAY********************************** */

var bombList = [];


/**************************************FUNCTION FOR PARTICLE RESET************************************* */
function particleReset() {
  particleList = [];
}



/**************************************FUNCTION FOR SLINGSHOT RESET************************************* */

function slingShotReset() {
  slingShotList = [];
}

// function particleMove() {

// }

/**********************************FUNCTION ADD PARTICLES********************************** */
function removeParticles() {
  if (particleList.length > 0) {
    particleList.splice(0, 1);
  }
}

// function addBossEnemy(){
//   var tempBoss;  
//   tempBoss =  new bossClass();
// }

function addParticles() {
  var tempParticle;
  tempParticle = new particleClass();
  // tempParticle.x = Math.random()*canvas.width;
  // tempParticle.y=Math.random()*canvas.height;
  tempParticle.x = blueHero.x;
  tempParticle.y = blueHero.y;
  tempParticle.velX = 6 - Math.random() * 10;
  tempParticle.velY = 10 - Math.random() * 10;

  if(Math.random() < 0.3){
    tempParticle.myColor = "red";
  }else{
    
    tempParticle.myColor = "yellow";
  }
  

  particleList.push(tempParticle);
}

/**********************************FUNCTION ADD SLINGSHOT BULLETS************************ */

function addSlingShotRight() {
  var tempSlingShot;
  tempSlingShot = new slingShotClass();
  // tempParticle.x = Math.random()*canvas.width;
  // tempParticle.y=Math.random()*canvas.height;
  tempSlingShot.x = blueHero.x;
  tempSlingShot.y = blueHero.y;
  // tempSlingShot.velX=5-Math.random()*10;
  // tempSlingShot.velY=5-Math.random()*10;
  tempSlingShot.velX = 15;
  tempSlingShot.velY = 0;
  slingShotList.push(tempSlingShot);
}




function addSlingShotLeft() {
  var tempSlingShot;
  tempSlingShot = new slingShotClass();
  // tempParticle.x = Math.random()*canvas.width;
  // tempParticle.y=Math.random()*canvas.height;
  tempSlingShot.x = blueHero.x;
  tempSlingShot.y = blueHero.y;
  // tempSlingShot.velX=5-Math.random()*10;
  // tempSlingShot.velY=5-Math.random()*10;
  tempSlingShot.velX = -15;
  tempSlingShot.velY = 0;
  slingShotList.push(tempSlingShot);
}
// function keyPressed(evt){
//   addParticles();
// }

/**********************************FUNCTION ADD SLINGSHOT BULLETS*********************** */
function animateSword(){
  if(blueHero.swordSlash = 0){
    blueHero.keyHeld_Sword =false;
    blueHero.swordSlash =0;
    }else{

     if (blueHero.keyHeld_Sword) {
    
    blueHero.swordSlash = 1;
    blueHero.keyHeld_Sword = true;
    }
  }
}

/**WW*************WW*WWWWWW**WW****WW******WWWWWW**WW****WW**WW******WWWWWW*******WW******WWWWW*/
/***WW*****W*****WW****WW****WWW***WW******WW**WW**WWW***WW**Ww******WW**WW*****WW**WW****WW***WW/
/****WW***WWW***WW*****WW****WW*W**WW******WW**WW**WW*W**WW**WW******WW**WW****WW****WW***WW***WW/
/*****WW*WW*WW*WW******WW****WW**W*WW******WW**WW**WW**W*WW**WW******WW**WW***WWWWWWWWWW**WW***WW/
/******WWW***WWW*****WWWWWW**WW***WwW******WWWWWW**WW***WWW**WWWWWW**WWWWWW**WW********WW*WWWWW**/


window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  document.getElementById("bossAudio").pause();
  
  for (var i = 0; i < 2; i++) {
    addSlingShotRight();
  }

  /*hook for dynamically adding a particle when pressing a key*/
  // document.addEventListener("keydown", keyPressed);

  colorRect(0, 0, canvas.width, canvas.height, "black");
  colorText("LOADING IMAGES", canvas.width / 2, canvas.height / 2, "white");
  loadImages();
  ghostReset();
  // secondParticle.x= 20;
  particleReset();
  //bossEnemyReset();
  bossEnemy.reset();
  boyCocoon.reset();
};


/****************************FUNCTION FOR DELAY AUDIO LEVEL TEN**************************** */
function delayAudio(){
   document.getElementById("bossAudio").play();
}

/****************************FUNCTION FOR IMAGELOADING**************************** */
/*MMMMMM****M******MM***** ***MM*******MMMMMMM***MMMMMM**MM**************************MM*******MM**MM****MM**MMMMMM***************MMMMMM************************* */
/***MM******MM*****MM*******MM**MM*****MM********MM******MM*******MMMMMM******MM*****MM*MM********MMMM**MM**MM*******************MM******MM***MM***MM*MMMM***MMMMM*************** */
/***MM*****MM*M***M*MM*****MM****MM****MM**MMMMM*MMMM****MM*******MM**MM****MM**MM***MM***MM**MM**MM*MM*MM**MM**MM***************MMMMM***MM***MM***MMM***MM**MM************* */
/***MM****MM***M*M***MM***MMMMMMMMMM***MM*****MM*MM******MM*******MM**MM***MMmmmmMM**MM*MM****MM**MM**MMMM**MM***MM**************MM******MM***MM***MM****MM**MM************* */
/*MMMMMM*MM****M******MM*MM********MM**MMMMMMMMM*MMMMMM**MMMMMMMM*MMMMMM**MM******MM*MM*******MM**MM***NNM**MMMMMM***************MM******MMMMMMM***MM****MM**MMMMM****************** */


function imageLoadingDoneSoStartGame() {
  var framesPersecond = 30;
  setInterval(updateAll, 1000 / framesPersecond);
  setupInput();
  var audio = new Audio("blues1-edited.wav");
  audio.play();
  loadLevel(levelList[levelNow]);
  
}

/*********************FUNCTION FOR NEXT LEVEL****************************************** */
function nextLevel() {
  levelNow++;
  if (levelNow >= levelList.length) {
    levelNow = 0;
  }
  loadLevel(levelList[levelNow]);
}

function loadLevel(whichLevel) {
  worldGrid = whichLevel.slice();
  particleReset();
  slingShotReset();
  blueHero.reset(heroPic, "Black Fire");
  rat.reset(); //TODO need 2 keep looping and instantiating
  cockroach_egg.reset();
   bossEnemy.reset();
   boyCocoon.reset();
  
  trapList = [];
  var lookForAnotherTrap = true;
  while(lookForAnotherTrap){
    var newTrap = new trapClass();
    var trapHasTile = newTrap.reset();
    if (trapHasTile){
      trapList.push(newTrap);
    }
    lookForAnotherTrap = trapHasTile;
  }


  waterList = [];
  var lookForAnotherWater = true;
  while(lookForAnotherWater){
    var newWater = new trapClass();
    var waterHasTile = newWater.reset();
    if (waterHasTile){
      waterList.push(newTrap);
    }
    lookForAnotherWater = waterHasTile;
  }//lookFor another while loop
}// end of function loadLevel

/**********************FUNCTION FOR UPDATING moveAll and drawAll FUNCTION************/
function updateAll() {
  moveAll();
  drawAll();
}

/****MM*****MM*********FUNCTION FOR UPDATING moveAll ****************************** */
/****MM*****MM*****MMMMMM*MM*******MM*MMMMMMM*******MMMMMM************************* */
/****MM*****MM*****MM**MM**MM*****MM**MM************MM******MM***MM**MM*MMMM**MMMMM*************** */
/***MM*M***M*MM****MM**MM***MM***MM***MMMMM*********MMMMM***MM***MM**MMM**MM**MM************ */
/**MM***M*M***MM***MM**MM****MM*MM****MM************MM******MM***MM**MM***MM**MM************ */
/*MM*****M*****MM**MMMMMM*****MM******MMMMMMM*******MM******MMMMMMM**MM***MM**MMMMM****************** */

function moveAll() {
  blueHero.move();
  rat.move();
  cockroach_egg.move();
  boyCocoon.move();
  bossEnemy.move();
  
  for (var i=0; i < trapList.length; i++){
    trapList[i].move();
  }
  
  for (var i=0; i < waterList.length; i++){
     waterList[i].move();
   }


  ghostMove();
  for (var i = 0; i < particleList.length; i++) {
    particleList[i].move();
    if(particleList[i].readyToRemove){
      particleList.splice(i,1);
    }
  }

  for (var i = slingShotList.length-1; i >= 0; i--) {
    slingShotList[i].move();
    if(slingShotList[i].readyToRemove){
      slingShotList.splice(i,1);
    }
  }

  for (var i = bombList.length-1; i >= 0; i--) {
    bombList[i].move();
    if(bombList[i].readyToRemove){
      bombList.splice(i,1);
    }
  }
  //Just illustration-- not going to keep this.
  // particleList[0].move();
  // particleList[1].move();

  // oneParticle.move();
  // secondParticle.move();

  /*--CCCC----------------CAMERA VARIABLES-------------------------------- */
  /*--CC----------------------------------------------------------------- */
  /*--CC--------cC--------------------cCCC-------------cC------------------ */
  /*--CC-------cC-C-------cC-----C----cC----c-CCCC----cC-C----------------- */
  /*--CC------cC---C-----cC-C---C-C---cCCC--cCC------cC---C--------------- */
  /*--CC-----cCcccccC---cC---C-C---C--cC----cC------cCcccccC--------------- */
  /*--CCCCC-cC-------C-cC-----C-----C-cCCC--cC-----cC-------C-------------- */

  camPanX = blueHero.x - canvas.width / 2;
  if (camPanX < 0) camPanX = 0;

  camPanY = blueHero.y - canvas.height / 2;
  if (camPanY > 0) camPanY = 0;
  // if (camPanY < 0) camPanY = 0; // This works but will disable all vertical panning commented out for now as a WIP
  
}


/**************************************BRICKS FOR CAMERA SPAN************************************* */
function drawOnlyBricksOnScreen() {
  // what are the top-left most col and row visible on canvas?
  var cameraLeftMostCol = Math.floor(camPanX / WORLD_W);
  var cameraTopMostRow = Math.floor(camPanY / WORLD_H);

  // how many columns and rows of tiles fit on one screenful of area?
  var colsThatFitOnScreen = Math.floor(canvas.width / WORLD_W);
  var rowsThatFitOnScreen = Math.floor(canvas.height / WORLD_H);

  // finding the rightmost and bottommost tiles to draw.
  // the +1 and + 2 on each pushes the new tile popping in off visible area
  // +2 for columns since WORLD_W doesn't divide evenly into canvas.width
  var cameraRightMostCol = cameraLeftMostCol + colsThatFitOnScreen + 2;
  var cameraBottomMostRow = cameraTopMostRow + rowsThatFitOnScreen + 1;

  for (
    var eachCol = cameraLeftMostCol;
    eachCol < cameraRightMostCol;
    eachCol++
  ) {
    for (
      var eachRow = cameraTopMostRow;
      eachRow < cameraBottomMostRow;
      eachRow++
    ) {
      
    } // end of for eachRow
  } // end of for eachCol
} // end of drawBricks()

/*********************FUNCTION DRAWALL********************************************************/
/*DDDDD********************************************* ****************************** */
/*DD***DD**DD*DDDD****DDDDD**DD***************DD*******MMMMMM************************* */
/*DD***DD**DDD*******DD**DD***DD*****DD******DD********MM******MM***MM**MM*MMMM**MMMMM*************** */
/*DD***DD**DD*******DDDDDDDD***DD***DD*DD***DD*********MMMMM***MM***MM**MMM**MM**MM************ */
/*DD***DD**DD******DD******DD***DD*DD***DD*DD**********MM******MM***MM**MM***MM**MM************ */
/*DDDDD****DD*****DD********DD***DD******DD************MM******MMMMMMM**MM***MM**MMMMM****************** */


function drawAll() {
  colorRect(0, 0, canvas.width, canvas.height, "black");
  canvasContext.save(); // needed to undo this .translate() used for scroll

  /* var worldMouseX = mouseX + camPanX; // Tile position under mouse used for debugging
  var worldMouseY = mouseY + camPanY;
  var mouseIndex = getTileIndexAtPixelCoord(worldMouseX,worldMouseY);
  var mouseC = mouseIndex % WORLD_COLS;
  var mouseR = Math.floor(mouseIndex/WORLD_COLS);
  console.log(mouseC,mouseR);*/

  // this next line is like subtracting camPanX and camPanY from every
  // canvasContext draw operation up until we call canvasContext.restore
  // this way we can just draw them at their "actual" position coordinates
  colorCircle(this.X, this.Y, 10, "white"); //draw ball
  canvasContext.translate(-camPanX, -camPanY);

  drawTracks();

  for (var i = 0; i < particleList.length; i++) {
    particleList[i].draw();
  }

  for (var i = 0; i < slingShotList.length; i++) {
    slingShotList[i].draw();
  }

  for (var i = 0; i < bombList.length; i++) {
    bombList[i].draw();
  }

  blueHero.draw();
  rat.draw();
  cockroach_egg.draw();
  boyCocoon.draw();
  bossEnemy.draw();
  for (var i=0; i < trapList.length; i++){
    trapList[i].draw();
  } 


  for (var i=0; i < waterList.length; i++){
    waterList[i].draw();
  }
  // particleCircle(this.x, this.y, 5, "yellow");
  // oneParticle.draw();
  // secondParticle.draw();

  ghostCircle(ghostX, ghostY, 18, "black");
  ghostCircle(ghostX, ghostY, 12, "red");
  ghostCircle(ghostX + 2, ghostY, 5, "white");
  ghostCircle(ghostX, ghostY, 2, "black");

  // monsterCircle(monsterX, monsterY, 20, 'green');
  monsterCircle(monsterX, ghostY, 12, "green");
  monsterCircle(monsterX - 1, ghostY, 5, "white");
  monsterCircle(monsterX - 2, ghostY + 2, 2, "black");

  canvasContext.restore();
  drawOnlyBricksOnScreen();

  //Draw UI here
}
