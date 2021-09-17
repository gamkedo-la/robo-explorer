var canvas, canvasContext;
var blueHero = new heroClass();
var rat = new ratClass();

var CHEATS_ENABLED = true;

/************************************************** */

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

const GRAVITY_PARTICLE_PER_CYCLE = 10;

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
  // if (ghostY > canvas.height) { //bottom of the screen
  //     ghostReset();

  //     ghostSpeedY *= -1;
  // }
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
  this.life=15+Math.random()*20;

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
    if (this.x > canvas.width) {
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
  };
} // end of slingShot def

// var oneParticle = new particleClass();
// var secondParticle = new particleClass();
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
      //  if( isBrickAtTileCoord(eachCol, eachRow) ) {
      //    var brickLeftEdgeX = eachCol * WORLD_W;
      //    var brickTopEdgeY = eachRow * WORLD_H;
      //    colorRect(brickLeftEdgeX, brickTopEdgeY,
      //             WORLD_W - WORLD_GAP, WORLD_H - WORLD_GAP, 'blue' );
      //  } // end of isBrickAtTileCoord()
    } // end of for eachRow
  } // end of for eachCol
} // end of drawBricks()

/**********************************FUNCTION ADD PARTICLES********************************** */
function removeParticles() {
  if (particleList.length > 0) {
    particleList.splice(0, 1);
  }
}

function addParticles() {
  var tempParticle;
  tempParticle = new particleClass();
  // tempParticle.x = Math.random()*canvas.width;
  // tempParticle.y=Math.random()*canvas.height;
  tempParticle.x = blueHero.x;
  tempParticle.y = blueHero.y+2;
  tempParticle.velX = 0 - Math.random() * 10;
  tempParticle.velY = 10 - Math.random() * 10;

  if(Math.random() < 0.5){
    tempParticle.myColor = "red";
  }else{
    tempParticle.myColor = "yellow";
  }
  

  particleList.push(tempParticle);
}

// function keyPressed(evt){
//   addParticles();
// }

/**********************************FUNCTION ADD SLINGSHOT BULLETS********************************** */



function addSlingShot() {
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

// function keyPressed(evt){
//   addParticles();
// }

/*************************************Windows Onload*****************************************/

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  // var tempParticle = new particleClass();
  // tempParticle.x = 100;
  // tempParticle.y=100;
  // particleList.push(tempParticle);

  // tempParticle = new particleClass();
  // tempParticle.x = 300;
  // particleList.push(tempParticle);

  /*var tempParticle;

  for(var i=0; i<5000;i++){
    tempParticle = new particleClass();
    tempParticle.x = Math.random()*canvas.width;
    tempParticle.y=Math.random()*canvas.height;
    tempParticle.velX=5-Math.random()*10;
    tempParticle.velY=5-Math.random()*10;
    particleList.push(tempParticle);
  
  }
 */

  // for (var i = 0; i < 2; i++) {
  //   addParticles();
  // }

  for (var i = 0; i < 2; i++) {
    addSlingShot();
  }

  /*hook for dynamically adding a particle when pressing a key*/
  // document.addEventListener("keydown", keyPressed);

  colorRect(0, 0, canvas.width, canvas.height, "black");
  colorText("LOADING IMAGES", canvas.width / 2, canvas.height / 2, "white");
  loadImages();
  ghostReset();
  // secondParticle.x= 20;
  particleReset();
};

/****************************FUNCTION FOR IMAGELOADING**************************** */

function imageLoadingDoneSoStartGame() {
  var framesPersecond = 30;
  setInterval(updateAll, 1000 / framesPersecond);
  setupInput();
  var audio = new Audio("Intro-BeepBox-Song.wav");
  audio.play();
  loadLevel(levelList[levelNow]);
  // worldGrid = levelOne;
  // blueCar.reset(otherCarPic, "Machine Raider");
  // blueHero.reset(heroPic, "Black Fire");
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
  // blueCar.reset(otherCarPic, "Machine Raider");
  blueHero.reset(heroPic, "Black Fire");
  rat.reset(); //TODO need 2 keep looping and instantiating
  //worldGrid[30] = 5;
  //console.log(whichLevel[30]);
}

/**********************FUNCTION FOR UPDATING moveAll and drawAll FUNCTION****************************** */
function updateAll() {
  moveAll();
  drawAll();
}

/**********************FUNCTION FOR UPDATING moveAll ****************************** */
function moveAll() {
  blueHero.move();
  rat.move();
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

  /*----------------------CAMERA VARIABLES-------------------------------- */
  camPanX = blueHero.x - canvas.width / 2;

  camPanY = blueHero.y - canvas.height / 2;
}

/*********************FUNCTION DRAWALL********************************************************/
function drawAll() {
  colorRect(0, 0, canvas.width, canvas.height, "black");
  canvasContext.save(); // needed to undo this .translate() used for scroll

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
