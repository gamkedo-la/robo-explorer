const GRAVITY_PARTICLE_PER_CYCLE = 10;
var canvas, canvasContext;
var blueHero = new heroClass();

// var babyGhost = new babyGhostClass();
//var cockroach_egg = new cockroach_eggClass();
var bossEnemy = new bossClass();
var boyCocoon = new boyCocoonClass();
var spidersInLevel = [];

var finalBossWorm = new finalBossClass();
var enemyList = [];
var waterList = [];
var CHEATS_ENABLED = true;
var worldNow = 0;
var worldList = [
  levelListTunnels,
  levelListForest,
  levelListLaboratory,
  storyMenu,
  storyBoy,
  storyEnding,
];
var worldSky = ["#6f6a6a", "#fffc9f", "#ffffff", "#000000"]; //#6f6a6a
/************************GHOST VARIABLES***************************/
var ghostX = 75;
var ghostY = 75;
var ghostSpeedX = 5;
var ghostSpeedY = 7;

var camPanX = 0.0;
var camPanY = 0.0;

var GamePad = new GamepadSupport();

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
  this.readyToRemove = false;
  // this.life=15+Math.random()*20;
  this.life = 1 + Math.random() * 2;

  this.move = function () {
    if (this.life-- < 0) {
      this.readyToRemove = true;
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
      this.velY *= -0.3; //Dampen Velocity
      // this.velY *= -1;
    }
  };

  this.draw = function () {
    // particleCircle(this.x, this.y, 2, "yellow");
    particleCircle(this.x, this.y, 2, this.myColor);
  };
} // end of particleClass def

// var oneParticle = new particleClass();
// var secondParticle = new particleClass();
var particleList = [];

/*********************SS*************SLINGSHOT BULLET CLASS********************************** */
/*****SSSS****SS*********************SSSSSSSS***SSSS****SS********************SS**************************** */
/****SS***SS**SS******SS***SS****SS**SS********SS*******SS**SS******SSSSSS****SS****************************** */
/******SS*****SS******SS***SSSS**SS**SS***SsSS****SS****SSSS**SS****SS**SS**SSSSSS********************************** */
/***SS****SS**SS******SS***SS**SSSS**SS****SS**SS***SS**SS******SS**SS**SS****SS***SS**************************** */
/*****SSSSSS**SSSSSS**SS***SS****SS**SSSSSS****SSSSSS***SS******SS**SSSSSS****SSSSSS*********************************** */

function slingShotClass() {
  this.x = 75;
  this.y = 75;
  this.velX = 5;
  this.velY = 7;
  this.readyToRemove = false;

  this.move = function () {
    this.x += this.velX;
    this.y += this.velY;
    if (this.x < 0) {
      this.readyToRemove = true;
    }
    if (this.x > canvas.width * 1.2) {
      // reason why slingshot is not reaching right wall
      this.readyToRemove = true;
    }
    if (this.y < 0) {
      this.readyToRemove = true;
    }
    if (this.y > canvas.height) {
      this.readyToRemove = true;
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
  /*if (particleList.length > 0) {
    particleList.splice(0, 1);
  }*/
  particleList.length = 0;
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

  if (Math.random() < 0.3) {
    tempParticle.myColor = "red";
  } else {
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

/* WORK IN PROGRESS FUNCTION TO CREATE INSTANCE OF WORM 
function addWorm(){
  var tempWorm;
  tempWorm = new smallWormClass();
  tempWorm.x = blueHero.x;
  tempWorm.y = blueHero.y;
  smallWormList.push(tempWorm);

}

var smallWormList = [];*/
/**********************************FUNCTION ADD SLINGSHOT BULLETS*********************** */
function animateSword() {
  if ((blueHero.swordSlash = 0)) {
    blueHero.keyHeld_Sword = false;
    blueHero.swordSlash = 0;
  } else {
    if (blueHero.keyHeld_Sword) {
      blueHero.swordSlash = 1;
      sword();
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
  document.getElementById("finalBossAudio").pause();

  for (var i = 0; i < 2; i++) {
    addSlingShotRight();
  }

  //addWorm(); WIP trying to create an instance of the smallWorm
  /*hook for dynamically adding a particle when pressing a key*/
  // document.addEventListener("keydown", keyPressed);

  colorRect(0, 0, canvas.width, canvas.height, "black");
  menuScreen(0, 0, canvas.width, canvas.height, "green");
  colorText("LOADING IMAGES", canvas.width / 2, canvas.height / 2, "white");
  loadImages();
  ghostReset();
  // secondParticle.x= 20;
  particleReset();
  //bossEnemyReset();
  bossEnemy.reset();
  boyCocoon.reset();
  // document.getElementById("storyMenu").style.transform = "scale(0)";
  // tunnelStory();
  // typeOut();
  document.getElementById("finalBossAudio").pause();
  document.getElementById("labAlarm").pause();
  document.getElementById("progression").pause();
  document.getElementById("gameOverSound").pause();
 
};

/****************************FUNCTION FOR DELAY AUDIO LEVEL TEN**************************** */
function delayAudio() {
  document.getElementById("bossAudio").play();
}

function finalBossAudio() {
  document.getElementById("finalBossAudio").play();
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
  playSoundUnlessAlreadyPlaying("blues1-edited.wav");
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
  // babyGhost.reset();
  //cockroach_egg.reset();
  bossEnemy.reset();
  boyCocoon.reset();
  finalBossWorm.reset();

  enemyList = [];

  var lookForAnotherTrap = true;
  while (lookForAnotherTrap) {
    var newTrap = new trapClass();
    var trapHasTile = newTrap.reset();
    if (trapHasTile) {
      enemyList.push(newTrap);
    }
    lookForAnotherTrap = trapHasTile;
  }

  var lookForAnotherRat = true;
  while (lookForAnotherRat) {
    var newRat = new ratClass();
    var ratHasTile = newRat.reset();
    if (ratHasTile) {
      enemyList.push(newRat);
    }
    lookForAnotherRat = ratHasTile;
  }

  spidersInLevel = [];
  var lookForAnotherSpider = true;
  while (lookForAnotherSpider) {
    var newSpider = new spiderClass();
    var spiderHasTile = newSpider.reset();
    if (spiderHasTile) {
      enemyList.push(newSpider);
      //spidersInLevel.push(newSpider); // testing rat collisions - Ryan A.
    }
    lookForAnotherSpider = spiderHasTile;
  }

  var lookForAnotherWorm = true;
  while (lookForAnotherWorm) {
    var newWorm = new smallWormClass();
    var wormHasTile = newWorm.reset();
    if (wormHasTile) {
      enemyList.push(newWorm);
    }
    lookForAnotherWorm = wormHasTile;
  }

  waterList = [];
  var lookForAnotherWater = true;
  while (lookForAnotherWater) {
    var newWater = new trapClass();
    var waterHasTile = newWater.reset();
    if (waterHasTile) {
      waterList.push(newTrap);
    }
    lookForAnotherWater = waterHasTile;
  } //lookFor another while loop
} // end of function loadLevel

/**********************FUNCTION FOR UPDATING moveAll and drawAll FUNCTION************/

// ultra simple little level start intro
var logoAlpha = 1;
var logoFadeSpeed = 0.007;
function fadeOutLogo() {
  if (logoAlpha < 0) return; // quick exit

  let offsetY = -64;

  if (performance.now() % 1000 > 500) {
    // flash
    let txtX = Math.round(canvas.width / 2);
    let txtY = Math.round(canvas.height / 2) + logoPic.height / 2 + offsetY;
    colorText(
      "PLAYER ONE - GET READY!",
      txtX + 2,
      txtY + 2,
      "black",
      "16px 'Press Start 2P'",
      "center"
    );
    colorText(
      "PLAYER ONE - GET READY!",
      txtX,
      txtY,
      "white",
      "16px 'Press Start 2P'",
      "center"
    );
  }

  // draw the logo
  let logoX = Math.round(canvas.width / 2 - logoPic.width / 2);
  let logoY = Math.round(canvas.height / 2 - logoPic.height / 2) + offsetY;
  canvasContext.globalAlpha = logoAlpha;
  canvasContext.drawImage(logoPic, logoX, logoY);
  logoAlpha -= logoFadeSpeed; // slowly fade out
  canvasContext.globalAlpha = 1; // reset

  colorText("C key to show credits", canvas.width / 2, canvas.height-10, "white");
}

function updateAll() {
  GamePad.update();
  moveAll();
  checkCollisionsAll();
  drawAll();
}

/****MM*****MM*********FUNCTION FOR UPDATING moveAll ****************************** */
/****MM*****MM*****MMMMMM*MM*******MM*MMMMMMM*******MMMMMM************************* */
/****MM*****MM*****MM**MM**MM*****MM**MM************MM******MM***MM**MM*MMMM**MMMMM*************** */
/***MM*M***M*MM****MM**MM***MM***MM***MMMMM*********MMMMM***MM***MM**MMM**MM**MM************ */
/**MM***M*M***MM***MM**MM****MM*MM****MM************MM******MM***MM**MM***MM**MM************ */
/*MM*****M*****MM**MMMMMM*****MM******MMMMMMM*******MM******MMMMMMM**MM***MM**MMMMM****************** */
function rocketEnergyBar() {
  //rocket energy =100
  //if I press on space bar reduce energy bar
  // if zero stop flight
  // if battery collected increase rocketEnergy +50
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 80;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
       clearInterval(id);
        i = 0;
      } else {
        width = blueHero.rocketEnergy;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

function moveAll() {
  blueHero.move();
  // babyGhost.move();
  //cockroach_egg.move();
  boyCocoon.move();
  bossEnemy.move();
  finalBossWorm.move();

  for (var i = 0; i < enemyList.length; i++) {
    enemyList[i].move();
  }

  for (var i = 0; i < waterList.length; i++) {
    waterList[i].move();
  }

  ghostMove();
  for (var i = 0; i < particleList.length; i++) {
    particleList[i].move();
    if (particleList[i].readyToRemove) {
      particleList.splice(i, 1);
    }
  }

  for (var i = slingShotList.length - 1; i >= 0; i--) {
    slingShotList[i].move();
    if (slingShotList[i].readyToRemove) {
      slingShotList.splice(i, 1);
    }
  }

  for (var i = bombList.length - 1; i >= 0; i--) {
    bombList[i].move();
    if (bombList[i].readyToRemove) {
      bombList.splice(i, 1);
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

  camPanX = blueHero.x - (canvas.width + 700) / 2; //test the horizontal panning.
  //camPanX = blueHero.x - canvas.width / 2;

  // camPanX = blueHero.x - canvas.width/ 2;
  if (camPanX < 0) camPanX = 0;

  camPanY = blueHero.y - canvas.height / 2;
  if (camPanY > 0) camPanY = 0;
  if (camPanY < 0) camPanY = 0;
}

/*--CCCC----------------CAMERA VARIABLES-------------------------------- */
/*--CC-------------CC-----CC-----CC-----CCCCCC---CCCCC--CC------------------------------ */
/*--CC----CCCCCCC--CC-----CC-----------CC-------CC----------CCCCCCC--CC------CC---------- */
/*--CC----CC---CC--CC-----CC-----CC------CC------CC-----CC--CC---CC--CCCC----CC----- */
/*--CC----CC---CC--CC-----CC-----CC------CC------CC-----CC--CC---CC--CC--CC--CC */
/*--CC----CC---CC--CC-----CC-----CC----CC------CC-------CC--CC---CC--CC----CCCC--- */
/*--CCCCC-CCCCCCC--CCCCCC-CCCCCC-CC--CC------CC---------CC--CCCCCCC--CC------CC-- */

function heroHealthBar() {
  //if hero collides with enemyList health-- will reduce Player health energy bar
  // if zero display gameOver message
  // if health collected increase armor by 10.
  
  blueHero.health--;
  if(blueHero.health !== 0){
  var health = blueHero.health;
  document.getElementById("health__character").innerHTML = health + "%";
  armorDamaged();
  //document.getElementById("health__character").style.width = width + "%";
        
  }

 /*
    if(blueHero.health == 0){
      document.getElementById("health__character").innerHTML = health;
    }*/
}



function bossCockroachHealth(){
  bossEnemy.health--;
  if(bossEnemy.health !== 0){
    var health = bossEnemy.health;
    document.getElementById("enemyHealth").innerHTML = health + "%";
          
    }
}


function bossWormHealth(){
  finalBossWorm.health--;
  if(finalBossWorm.health !== 0){
    var health = finalBossWorm.health;
    document.getElementById("finalEnemyHealth").innerHTML = health + "%";
          
    }
}
/*
function explode(){
  if (blueHero.health <= 0) {
    blueHero.explode++;
  }
  
}*/

function gameOver(){
  document.getElementById("health").style.display = "none";
  document.getElementById("gameOver").style.display = "block";
  document.getElementById("gameOverSound").play();
  document.getElementById("armor").style.display="none";
}

function checkCollisionsAll() {

  //enemies bumping into bomb
  for (var enemy of enemyList){
    var newBomb = new bombClass();
    if(entity_v_entity(newBomb,enemy)){
      switch(enemy.myTileKind){
        case WORLD_RAT:
          if(newBomb.life-- < 0){
            enemy.readyToRemove = true;
            console.log("bomb hits rat");
          
          }
          break;
            
        case WORLD_SPIDER:
          if (bombList.length > 0) {
            enemy.readyToRemove = true;
          }
          break;
          default:
          break;
      }
    }
  }
  //enemies bumping into player
  for (var enemy of enemyList) {
    if (entity_v_entity(blueHero, enemy)) {
      switch (enemy.myTileKind) {
        case WORLD_RAT:
          if (blueHero.swordSlash == 1) {
            blueHero.keyHeld_Sword = true;
            ratCollisionSound();
            enemy.readyToRemove = true;
          }
          
          

          if(blueHero.health !== 0){
            heroHealthBar();
          }
          if (blueHero.health > 0) {
            blueHero.health--;
         
            console.log("blueHero health" + blueHero.health);
          }
          if (blueHero.health <= 0) {
            // document.getElementById("gameOver").style.display = "block";
            // document.getElementById("gameOverSound").play();
            // blueHero.explode == 1;
            gameOver();
          }
         
          /*
          if (blueHero.health <= 0) {
            heroHealthBar(); // test to reduce hero health bar.
          }*/

          console.log("Bump rat");
          break;

        case WORLD_SPIDER:
          if(blueHero.health !== 0){
            heroHealthBar();
          }
          console.log("Bump spider");
          if (blueHero.swordSlash == 1) {
            blueHero.keyHeld_Sword = true;
            spider();
           
            enemy.readyToRemove = true;
          }
          if (blueHero.health > 0) {
            blueHero.health--;
            console.log("blueHero health" + blueHero.health);
          }
          if (blueHero.health <= 0) {
            // document.getElementById("gameOver").style.display = "block";
            // document.getElementById("gameOverSound").play();
            gameOver();
          }
          break;
        case WORLD_SMALLWORM:
          if(blueHero.health !== 0){
            heroHealthBar();
          }
          if (blueHero.health > 0) {
            blueHero.health--;
            console.log("blueHero health" + blueHero.health);
          }
          if (blueHero.health <= 0) {
            gameOver();
            // document.getElementById("health").style.display = "none";
            // document.getElementById("gameOver").style.display = "block";
            // document.getElementById("gameOverSound").play();
          }
          console.log("Bump smallWorm");
          break;
        case WORLD_TRAP:
          console.log("Bump trap");
          playSoundUnlessAlreadyPlaying("trap_sound.mp3");
          if(blueHero.health !== 0){
            heroHealthBar();
          }
          if (blueHero.health > 0) {
            blueHero.health--;
            console.log("blueHero health" + blueHero.health);
          }
          if (blueHero.health <= 0) {
            gameOver();
            // document.getElementById("gameOver").style.display = "block";
            // document.getElementById("gameOverSound").play();
            // blueHero.explode = 1;
          }
          break;
        default:
          console.log("unknown collision " + enemy.myTileKind);
          break;
      }
    }
  }


  if (entity_v_entity(blueHero, boyCocoon)) {
    if (blueHero.swordSlash == 1) {
      //Load story of boy being saved by Robo-explorer.
      //worldNow=5;//test ending story
      worldNow = 4;
      document.getElementById("gameHeading").innerHTML = "DR. AMBERVARD LAB";
      levelList = worldList[worldNow];
      levelNow = 0;
      document.getElementById("progression").play();
      document.getElementById("health__bossCockroach").style.display = "none";
      loadLevel(levelList[levelNow]);
      console.log("Hero hit boyCocoon");
    }
   
  }


  //slingShot collisions
  for (var shot of slingShotList) {
    for (var enemy of enemyList) {
      if (entity_v_entity(shot, enemy)) {
        enemy.readyToRemove = true;
        shot.readyToRemove = true;
      }
    }

    if (bossEnemy.health > 0 && entity_v_entity(shot, bossEnemy)) {
      shot.readyToRemove = true;
      bossCockRoachSound()
      bossEnemy.health--;
      bossCockroachHealth()
      document.getElementById("health__bossCockroach").style.display = "block";
      document.getElementById("boss1").style.display = "block";
      if(blueHero.health !== 0){
        heroHealthBar();
      }
      if (bossEnemy.health == 0) {
        document.getElementById("health__bossCockroach").style.display = "none";
        document.getElementById("boss1").style.display = "none";
        bossAudio.pause();
      }
      console.log("shot hit boss");
    }

    if (finalBossWorm.health > 0 && entity_v_entity(shot, finalBossWorm)) {
      shot.readyToRemove = true;
      finalBossWormSound();
      finalBossWorm.health--;
      
      bossWormHealth();
      document.getElementById("health__bossWorm").style.display = "block";
      document.getElementById("boss2").style.display = "block";
      if(blueHero.health !== 0){
        heroHealthBar();
      }

      if (finalBossWorm.health == 0) {
        document.getElementById("health__bossWorm").style.display = "none";
        document.getElementById("boss2").style.display = "none";
        bossAudio.pause();
      }
      console.log("shot hit final boss");
    }
  }

  //backwards loop to remove elements ready for removal
  for (var i = enemyList.length - 1; i >= 0; i--) {
    if (enemyList[i].readyToRemove) {
      enemyList.splice(i, 1);
    }
  }

  for (var i = slingShotList.length - 1; i >= 0; i--) {
    if (slingShotList[i].readyToRemove) {
      slingShotList.splice(i, 1);
    }
  }


  /**--bbbbbb-----bbbbbb---bbbbbbb----bbbbbbb------------------------------------------------------------ */
  /**--bb----bb---bb---bb---bb---------bb--------------------------------------------------- */
  /**--bb----bb---bb---bb-----bb---------bb--------------------------------------------- */
  /**--bbbbbb-----bb---bb-------bb---------bb------------------------------------------------- */
  /**--bb----bb---bb---bb-------bb-------bb------------------------------------------------ */
  /**--bbbbbbbb---bbbbbbb----bbb------bbbb-------------------------------------------------------- */

  if (bossEnemy.health > 0 && entity_v_entity(blueHero, bossEnemy)) {
    /** HERO DIES TOMORROW */
    if (blueHero.health > 0) {
     blueHero.health--;
     console.log("blueHero health" + blueHero.health);
   }
   if(blueHero.health !== 0){
    heroHealthBar();
  }
   if (blueHero.health <= 0) {
    gameOver();
    //  document.getElementById("gameOver").style.display = "block";
    //  document.getElementById("gameOverSound").play();
   }
   console.log("Hero hit boss Cockroach");
 }



  if (finalBossWorm.health > 0 && entity_v_entity(blueHero, finalBossWorm)) {
     /** HERO DIES TOMORROW */
     if (blueHero.health > 0) {
      blueHero.health--;
      console.log("blueHero health" + blueHero.health);
    }
    if(blueHero.health !== 0){
      heroHealthBar();
    }
    if (blueHero.health <= 0) {
      gameOver();
      // document.getElementById("gameOver").style.display = "block";
      // document.getElementById("gameOverSound").play();
    }
    console.log("Hero hit final bossWorm");
  }


}

function rocketPackError() {
  var audio = new Audio("rocketPackError.mp3");
  audio.play();
}

function entity_v_entity(entity1, entity2) {
    if (
      ((entity1.x > entity2.x && entity1.x < entity2.x + entity2.width) ||
      (entity1.x + entity1.width > entity2.x && entity1.x + entity1.width < entity2.x + entity2.width)) &&
      ((entity1.y > entity2.y && entity1.y < entity2.y + entity2.height) ||
      (entity1.y + entity1.height > entity2.y && entity1.y + entity1.height < entity2.y + entity2.height))
    ) {
    return true;
  } else {
    return false;
  }
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
    ) {} // end of for eachRow
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
  if(showCredits) {
    drawCredits();
    return;
  }
  colorRect(0, 0, canvas.width, canvas.height, worldSky[worldNow]);

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
  // babyGhost.draw();
  //cockroach_egg.draw();
  boyCocoon.draw();

  bossEnemy.draw();
  finalBossWorm.draw();

  for (var i = 0; i < enemyList.length; i++) {
    enemyList[i].draw();
  }

  for (var i = 0; i < waterList.length; i++) {
    waterList[i].draw();
  }
  // particleCircle(this.x, this.y, 5, "yellow");
  // oneParticle.draw();
  // secondParticle.draw();

  /*
  ghostCircle(ghostX, ghostY, 18, "black");
  ghostCircle(ghostX, ghostY, 12, "red");
  ghostCircle(ghostX + 2, ghostY, 5, "white");
  ghostCircle(ghostX, ghostY, 2, "black");
*/

  canvasContext.restore();
  drawOnlyBricksOnScreen();

  //Draw UI here
  fadeOutLogo(); // "ready player one" intro
}
