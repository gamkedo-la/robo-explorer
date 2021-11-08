//NOTE TO SELF FOR GIT UPDATE myCarPic to myHeroPic Aug 13, 2021- Will remove later
// const GROUNDSPEED_DECAY_MULT = 0.94;
// const DRIVE_POWER = 0.5;
// const REVERSE_POWER = 0.2;
// const TURN_RATE = 0.06;
// const MIN_SPEED_TO_TURN = 0.5;
const PLAYER_MOVEMENT_SPEED = 10.0;
const JUMP_POWER = 15;
const GRAVITY = 10.5;
const AIR_RESISTANCE = 0.95;
const START_PARTICLES = 2;
const PLAYER_ANIM_FRAMES = 8;
const ROCKET_LIFE = 100;

function heroClass() {
  // var sound = document.getElementById("heroSound");
  // var play = 0;

  this.x = 75;
  this.y = 75;
  this.rocketEnergy = ROCKET_LIFE;
  this.jumperOnGround = false;
  this.gravity = GRAVITY;
  this.jumperSpeedX = 0;
  this.jumperSpeedY = 0;
  this.flyAng = 0;
  this.width = 40;
  this.height = 40;
  this.frameX = 0;
  this.frameY = 0;
  // this.ang = 0;
  // this.speed = 0;
  this.myHeroPic;
  this.name = "Untitled Explorer";
  this.keysHeld = 0;
  this.daggersHeld = 0;
  this.items = 0;
  // this.rocketEnergy=0;
  // this.life = 3;
  this.moveDir = 0;
  this.fireSlingshot = -1;
  this.swordSlash = 0;
  this.swim = 0;
  this.regularJump = 0;
  this.climb = 0;
  this.climbDown = 0;
  this.crawl = 0;
  this.onRechargableBattery = null;

  this.keyHeld_Climb = false;
  this.keyHeld_ClimbDown = false;
  this.keyHeld_WalkLeft = false;
  this.keyHeld_WalkRight = false;
  this.keyHeld_Fly = false;
  this.keyHeld_Slingshot = false;
  this.keyHeld_Bomb = false;
  this.keyHeld_Sword = false;
  this.keyHeld_LShiftKey = false;
  this.keyHeld_Swim = false;
  // this.sound = false;

  this.controlKeyUp;
  this.controlKeyRight;
  this.controlKeyDown;
  this.controlKeyLeft;
  this.controlKeyJump;
  this.controlKeySlingshot;
  this.controlKeyBomb;
  this.controlKeySword;
  this.controlKeyLshift;
  this.controlKeySwim;
  // this.playSound = function(){
  //   if(play == 0){
  //     play = 1;
  //     sound.play();
  //   }else{
  //     play = 0;
  //     sound.pause();
  //   }
  // }

  //properties for sprite animation
  this.frame = 0;
  this.numberOfFrames = 8; //how many frames are in the spritesheet
  this.animationSpeed = 0;
  this.animationCounter = 0;

  this.setupInput = function (
    upKey,
    rightKey,
    downKey,
    leftKey,
    flyKey,
    slingshotKey,
    bombKey,
    swordKey,
    lshiftKey,
    swimKey
  ) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
    this.controlKeyFly = flyKey;
    this.controlKeySlingshot = slingshotKey;
    this.controlKeyBomb = bombKey;
    this.controlKeySword = swordKey;
    this.controlKeyLshift = lshiftKey;
    this.controlKeySwim = swimKey;
  };

  this.reset = function (whichImage, heroName) {
    this.name = heroName;
    this.myHeroPic = whichImage;
    this.keysHeld = 0;
    this.daggersHeld = 0;
    this.rocketEnergy = ROCKET_LIFE;
    // this.life = 3;
    this.updateKeyReadout();
    // this.updateItemsReadout();
    // this.updateLifeReadout();
    //  this.speed = 0;

    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == WORLD_PLAYERSTART) {
          worldGrid[arrayIndex] = WORLD_EMPTY;
          // this.ang = -Math.PI / 2;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return;
        } //end of player start if
      } // end of col for
    } // endo frow for
    console.log("NO PLAYER START FOUND!");
  }; // end of heroReset function

  this.updateKeyReadout = function () {
    document.getElementById("debugText").innerHTML = "Keys: " + this.keysHeld;
  };

  this.updateDaggerReadout = function () {
    document.getElementById("daggerText").innerHTML = "Daggers life: " + this.daggersHeld;
  }

  this.updateRocketEnergyReadout = function () {
    document.getElementById("rocketEnergyText").innerHTML = "ENERGY: " + this.rocketEnergy;
  }

  this.updateSlingshotReadout = function () {
    // document.getElementById("slingshot").innerHTML = "1. Slingshot";
    document.getElementById("slingShot").style.display = "block";
    
  };

  this.updateSwordReadout = function () {
    // document.getElementById("sword").innerHTML = "2. Sword";
    document.getElementById("sword").style.display = "block";
  };

  this.updateArrowReadout = function () {
    document.getElementById("arrow").style.display = "block";
  };

  this.updateSpearReadout = function () {
    document.getElementById("spear").style.display = "block";
  };

  this.updateCrossbowReadout = function () {
    document.getElementById("crossbow").style.display = "block";
    // document.getElementById("collected-crossbows").innerHTML = "1";
  };

  this.updateWoodenBowReadout = function () {
    document.getElementById("woodenBow").innerHTML = "5. Wooden Bow";
  };

  /**************************CODE FOR CHARACTER TO MOVE******************************************************/
  this.move = function () {
    // this.speed *= GROUNDSPEED_DECAY_MULT;

    var nextX = this.x;
    var nextY = this.y;


    
    /*--------------------FF---FOR ANIMATING FLIGHT OF CHARACTER-------------------*/
    /*--FFFFFFF--FF-------FF------------------------------------------------------------------------*/
    /*--FF-------FF------------FFFFFFF----FF-------FFFF-----------------------------------------------*/
    /*--FFFF-----FF-------FF---FF---------FF-------FF------------------------------------------*/
    /*--FFF------FF-------FF---FF---FFFF--FFFFFFF--FFFF---------------------------------------------*/
    /*--FF-------FF-------FF---FF------F--FF---FF--FF-------------------------------------------*/
    /*--FF-------FFFFFFF--FF---FFFFFFFFF--FF---FF--FFFFFFF--------------------------------------*/

    if (this.keyHeld_Fly) {
      rocketEnergyBar();
      if (this.rocketEnergy !== 0) {
        this.rocketEnergy--;
        nextY -= JUMP_POWER;
        //console.log(this.rocketEnergy);
        for (var i = 0; i < START_PARTICLES; i++) {
          addParticles();
          var audio = new Audio("rocketSound5.mp3");
          audio.play();
        }

      } else {
        this.keyHeld_Fly = false;// disable flight
        nextY += GRAVITY * 200;
        removeParticles();
      }

      // rocketLife();
      // addParticles();
      // addSlingShot();
      // console.log("JUMP_POWER");
    } else {
      var tileIndexCenter = getTileIndexAtPixelCoord(this.x, this.y);
      var tileTypeCenter = worldGrid[tileIndexCenter];

      if (tileTypeCenter == WORLD_WATER) {
        nextY += GRAVITY * 0.1; //slower gravity
        this.rocketEnergy = 0;
      } else {
        nextY += this.gravity;
      }

      // removeParticles();


      // removeSlingShot();
      // if (this.jumperSpeedY > this.JUMPER_HEIGHT) {
      //   this.jumperSpeedY = this.height;
      // }
      //   // if(this.keyHeld_Fly == false){
      //   GRAVITY == 2;
      // }
    }

    // console.log("GRAVITY");

    /******************SWIM CODE************************ */
    /*-----------------------FOR ANIMATING JUMP OF CHARACTER-------------------*/
    /*--SSSSSS---------------------------SS------------*/
    /*---SS--------------------------------------*/
    /*-----SS----SS------------------Ss--SS--SSSS------SSSS----*/
    /*-------SS----SS------SS------SS----SS--SS--SS--SS--SS------*/
    /*------SS-------SS--Ss--SS--SS------SS--SS----SS----SS------*/
    /*--SSSS-----------SS------SS--------SS--SS----------SS*/
    

    if (this.keyHeld_Swim){
      var tileIndexTop = getTileIndexAtPixelCoord(this.x, this.y - this.height / 2);
      var tileTypeTop = worldGrid[tileIndexTop];
      this.swim = 1;     
    
      if (tileTypeCenter == WORLD_WATER) {
        nextY -= PLAYER_MOVEMENT_SPEED * 0.2;
       
      } else if (tileTypeCanBeMoveThrough(tileTypeTop) && tileTypeCenter !== WORLD_WATER) { //disables moving up when not in water
        this.swim = 0;
        nextY -= PLAYER_MOVEMENT_SPEED * 0.5;
        //nextY -= PLAYER_MOVEMENT_SPEED * 1.8;// need to limit jump power separate from flight
      }

    }





    /********JUMP CODE******************************* */
    /*-----------------------FOR ANIMATING JUMP OF CHARACTER-------------------*/
    /*--------JJ------------------------------------------------*/
    /*--------JJ---------------------------JJJJJJ---------------------*/
    /*--------JJ---JJ--JJ--JJ----------JJ--JJ--JJ---------------------------*/
    /*--------JJ---JJ--JJ--JJJJ------JJJJ--JJJJJJ------------------------------*/
    /*----JJ--JJ---JJ--JJ--JJ--JJ--JJ--JJ--JJ---------------------------------*/
    /*----JJJJJJ---JJJJJJ--JJ----JJ----JJ--JJ---------------------------------*/
    if (this.keyHeld_LShiftKey){
      var tileIndexCenter = getTileIndexAtPixelCoord(this.x, this.y);
      var tileTypeCenter = worldGrid[tileIndexCenter];
      
      // var tileIndexTop = getTileIndexAtPixelCoord(this.x, this.y - this.height / 2);
      // var tileTypeTop = worldGrid[tileIndexTop];
      this.regularJump =1;
      // console.log(this.regularJump);
      nextY -= PLAYER_MOVEMENT_SPEED * 1.8;
    
    }else {
      this.regularJump=0;
    }

    /*-----------------------FOR ANIMATING CLIMB OF CHARACTER-------------------*/
    /*--CCCCCCC-----------CC-------------------------------------------------------------*/
    /*--CC-------CC-------------------------------CC------------*/
    /*--CC-------CC-------CC----------------------CC---------*/
    /*--CC-------CC-------CC-------CC------CC-----CCCCCCCC---------------*/
    /*--CC-------CC-------CC-----CC--CC--CC--CC---CC----CC----------------*/
    /*--CCCCCCC--CCCCCCC--CC---CC------CC------CC-CCCCCCCC--------------*/
    if (this.keyHeld_Climb) {

       var tileIndexCenter = getTileIndexAtPixelCoord(this.x, this.y);
      var tileTypeCenter = worldGrid[tileIndexCenter];

      //var tileIndexTop = getTileIndexAtPixelCoord(this.x, this.y - this.height / 2);
      //var tileTypeTop = worldGrid[tileIndexTop];
    /*
      this.swim = 1;     
    
      if (tileTypeCenter == WORLD_WATER) {
        nextY -= PLAYER_MOVEMENT_SPEED * 0.2;
       
      } else if (tileTypeCanBeMoveThrough(tileTypeTop)) {
        this.swim = 0;
        nextY -= PLAYER_MOVEMENT_SPEED * 1.8;// need to limit jump power separate from flight
      }*/ 
      

      if (tileTypeCenter !== WORLD_LADDER || tileTypeCenter == WORLD_WATER) {
        
        this.climb = 0;  
        nextY -= PLAYER_MOVEMENT_SPEED * 0.1; // disables moving up when not in ladder and when in water slime.
      } else {
        
        this.climb = 1;        
        nextY -= PLAYER_MOVEMENT_SPEED * 2;
      } 
    }

/*
    if (this.keyHeld_ClimbDown) {
      this.climbDown = 1;
      nextY += this.gravity * 0.5;
    } else {
      this.climbDown = 0;
    }*/

    /*-----------FOR ANIMATING MOVEMENT OF CHARACTER LEFT AND RIGHT-------- */
    /*--WW-----WW------------------WW------------------------------------------------ */
    /*--WW-----WW------------------WW----------WW------------------------------------- */
    /*--WW-----WW--------WW--------WW----------WW--WW-------------------------------------- */
    /*--WW--W--WW------WW--WW------WW----------WWWW------------------------------------------ */
    /*--WW-W-W-WW----WWWWWWWWWW----WW----------WW--WW---------------------------------------- */
    /*--WWW---WWW--WW----------WW--WWWWWWWWWW--WW----WW---------------------------------------------- */

    if (this.fireSlingshot < 0) {
      this.moveDir = 0;
    }

    if (this.keyHeld_WalkLeft) {
      // nextX -= PLAYER_MOVEMENT_SPEED;
      this.moveDir = -1;
      // switchCostume(costumeList[1]);
      // this.speed -= REVERSE_POWER;
      var tileIndexCenter = getTileIndexAtPixelCoord(this.x, this.y);
      var tileTypeCenter = worldGrid[tileIndexCenter];
      if (tileTypeCenter == WORLD_WATER) {
        nextX -= PLAYER_MOVEMENT_SPEED * 0.2; //made left movement slower in slime water
      } else {
        nextX -= PLAYER_MOVEMENT_SPEED;// 
      }
    }

    if (this.keyHeld_WalkRight) {
      // nextX += PLAYER_MOVEMENT_SPEED;
      this.moveDir = 1;

      var tileIndexCenter = getTileIndexAtPixelCoord(this.x, this.y);
      var tileTypeCenter = worldGrid[tileIndexCenter];
      if (tileTypeCenter == WORLD_WATER) {
        nextX += PLAYER_MOVEMENT_SPEED * 0.2; //made right movement slower in slime water
      } else {
        nextX += PLAYER_MOVEMENT_SPEED;// 
      }

      if (tileTypeCenter !== WORLD_WALL3) {
        this.crawl = 0;
      } else {
        this.crawl = 1;
      }





    }
    // this.x += Math.cos(this.ang) * this.speed;
    // this.y += Math.sin(this.ang) * this.speed;
    // heroTrackHandling(this);

    /*--------------FOR ANIMATING SLINGSHOT----------------*/

    if (this.keyHeld_Slingshot && this.keyHeld_WalkLeft) {
      this.fireSlingshot = 1;
      this.keyHeld_Slingshot = false;
      var audio = new Audio("slingShot2.wav");
      audio.play();
      addSlingShotLeft();
    }

    if (this.keyHeld_Slingshot && this.keyHeld_WalkRight) {
      this.fireSlingshot = 1;
      this.keyHeld_Slingshot = false;
      var audio = new Audio("slingShot2.wav");
      audio.play();
      addSlingShotRight();
    }

    if (this.fireSlingshot > 0) {
      this.frame = this.fireSlingshot;
      this.fireSlingshot++;
      if (this.fireSlingshot >= PLAYER_ANIM_FRAMES) {
        this.fireSlingshot = -1;
      }
    }

    /*--------------FOR ANIMATING SWORD SLASH----------------*/

    /* if(this.swordSlash = 0){
     this.keyHeld_Sword =false;
     this.swordSlash =0;
     }else{

      if (this.keyHeld_Sword) {
     
     this.swordSlash = 1;
     this.keyHeld_Sword = true;
     }
     }*/

    animateSword();


    /*--------------FOR ANIMATING BOMB----------------*/

    if (this.keyHeld_Bomb) {
      this.keyHeld_Bomb = false;
      //console.log("bomb");
      var newBomb = new bombClass();
      newBomb.reset();
      newBomb.x = this.x;
      newBomb.y = this.y;
      bombList.push(newBomb);
    }



    var walkIntoTileTypes = this.getWalkIntoTileTypes(nextX, nextY);
    var walkIntoTileTypeTop = walkIntoTileTypes.walkIntoTileTypeTop;
    var walkIntoTileTypeRight = walkIntoTileTypes.walkIntoTileTypeRight;
    var walkIntoTileTypeBottom = walkIntoTileTypes.walkIntoTileTypeBottom;
    var walkIntoTileTypeLeft = walkIntoTileTypes.walkIntoTileTypeLeft;

    var walkIntoTileIndexTop = walkIntoTileTypes.walkIntoTileIndexTop;
    var walkIntoTileIndexRight = walkIntoTileTypes.walkIntoTileIndexRight;
    var walkIntoTileIndexBottom = walkIntoTileTypes.walkIntoTileIndexBottom;
    var walkIntoTileIndexLeft = walkIntoTileTypes.walkIntoTileIndexLeft;

    /*--------------CODE FOR ANGLED FLIGHT --------------*/

    // this.flyAng =0;
    var targetAng = 0;
    if (nextY < this.y) {
      targetAng = Math.atan2(nextY - this.y, nextX - this.x) + Math.PI / 2;
      // console.log(this.flyAng);
    }
    var tiltRate = 0.1;
    this.flyAng = tiltRate * targetAng + (1.0 - tiltRate) * this.flyAng;
    // this.updateLifeReadout= function(){
    //   document.getElementById("life").innerHTML = "Life: " + this.life;
    // }

    /*--------------CODE FOR REPLACING WORLD TILES WHEN WALKED INTO--------------*/
    /*-------------KEY CLIMB W key------------------ */
    /* if (this.keyHeld_Climb && tileTypeCanBeMoveThrough(walkIntoTileTypeTop)) {
       this.y = nextY;
     } else if (tileTypeCanBeMoveThrough(walkIntoTileTypeTop) == false) {
       this.y++;
     }*/
     

    if (this.keyHeld_Fly && tileTypeCanBeMoveThrough(walkIntoTileTypeTop)) {
      this.y = nextY;
    } else if (tileTypeCanBeMoveThrough(walkIntoTileTypeTop) == false) {
      this.y++;
    }

    if (this.keyHeld_Fly == false && tileTypeCanBeMoveThrough(walkIntoTileTypeBottom)) {
      this.y = nextY;
    } else if (tileTypeCanBeMoveThrough(walkIntoTileTypeBottom) == false) {
      //this.y--;//Makes character shake we will add a nicer fix.
      this.y = (1 + Math.floor(this.y / WORLD_H)) * WORLD_H - this.height / 2;
    }

    if (this.keyHeld_WalkLeft && tileTypeCanBeMoveThrough(walkIntoTileTypeLeft)) {
      this.x = nextX;
    } else if (tileTypeCanBeMoveThrough(walkIntoTileTypeLeft) == false) {
      this.x++;
    }

    if (this.keyHeld_WalkRight && tileTypeCanBeMoveThrough(walkIntoTileTypeRight)) {
      this.x = nextX;
    } else if (tileTypeCanBeMoveThrough(walkIntoTileTypeRight) == false) {
      this.x--;
    }

    //Which Tile we are grabbing or opening.
    var walkIntoTileType = WORLD_EMPTY;
    var walkIntoTileIndex;
    if (this.keyHeld_WalkLeft) {
      walkIntoTileType = walkIntoTileTypeLeft;
      walkIntoTileIndex = walkIntoTileIndexLeft;
      this.reactToTileType(walkIntoTileType, walkIntoTileIndex);
    }

    if (this.keyHeld_WalkRight) {
      walkIntoTileType = walkIntoTileTypeRight;
      walkIntoTileIndex = walkIntoTileIndexRight;
      this.reactToTileType(walkIntoTileType, walkIntoTileIndex);
    }

    if (this.keyHeld_Fly) {
      walkIntoTileType = walkIntoTileTypeTop;
      walkIntoTileIndex = walkIntoTileIndexTop;
      this.reactToTileType(walkIntoTileType, walkIntoTileIndex);
    }

    if (this.keyHeld_Climb) {
      walkIntoTileType = walkIntoTileTypeTop;
      walkIntoTileIndex = walkIntoTileIndexTop;
      this.reactToTileType(walkIntoTileType, walkIntoTileIndex);
    }

    if (this.keyHeld_LShiftKey) {
      walkIntoTileType = walkIntoTileTypeTop;
      walkIntoTileIndex = walkIntoTileIndexTop;
      this.reactToTileType(walkIntoTileType, walkIntoTileIndex);
    }

    
    if (this.keyHeld_Swim) {
      walkIntoTileType = walkIntoTileTypeTop;
      walkIntoTileIndex = walkIntoTileIndexTop;
      this.reactToTileType(walkIntoTileType, walkIntoTileIndex);
    }

    {
      // Feet
      walkIntoTileType = walkIntoTileTypeBottom;
      walkIntoTileIndex = walkIntoTileIndexBottom;
      this.reactToTileType(walkIntoTileType, walkIntoTileIndex);
    }

    if (this.onRechargableBattery && walkIntoTileIndex !== this.onRechargableBattery) {
      worldGrid[this.onRechargableBattery] = WORLD_ROCKET_RECHARGABLE_BATTERY
      this.onRechargableBattery = null
    }
  };

  this.getWalkIntoTileTypes = function (nextX, nextY) {
    var walkIntoTileIndexTop = getTileIndexAtPixelCoord(
      nextX,
      nextY - this.height / 2
    );
    var walkIntoTileTypeTop = WORLD_WALL;

    var walkIntoTileIndexBottom = getTileIndexAtPixelCoord(
      nextX,
      nextY + this.height / 2
    );
    var walkIntoTileTypeBottom = WORLD_WALL;

    var walkIntoTileIndexLeft = getTileIndexAtPixelCoord(
      nextX - this.width / 2,
      nextY
    );
    var walkIntoTileTypeLeft = WORLD_WALL;

    var walkIntoTileIndexRight = getTileIndexAtPixelCoord(
      nextX + this.width / 2,
      nextY
    );
    var walkIntoTileTypeRight = WORLD_WALL;

    if (walkIntoTileIndexTop != undefined) {
      walkIntoTileTypeTop = worldGrid[walkIntoTileIndexTop];
    }

    if (walkIntoTileIndexBottom != undefined) {
      walkIntoTileTypeBottom = worldGrid[walkIntoTileIndexBottom];
    }

    if (walkIntoTileIndexLeft != undefined) {
      walkIntoTileTypeLeft = worldGrid[walkIntoTileIndexLeft];
    }

    if (walkIntoTileIndexRight != undefined) {
      walkIntoTileTypeRight = worldGrid[walkIntoTileIndexRight];
    }

    return {
      walkIntoTileTypeTop,
      walkIntoTileIndexTop,
      walkIntoTileTypeBottom,
      walkIntoTileIndexBottom,
      walkIntoTileTypeLeft,
      walkIntoTileIndexLeft,
      walkIntoTileTypeRight,
      walkIntoTileIndexRight,
    };
  };

  /********************CODE FOR REACTING TO THE TILE TYPE WHEN WALKING INTO************************************** */

  this.reactToTileType = function (walkIntoTileType, walkIntoTileIndex) {
    switch (walkIntoTileType) {
      case WORLD_EMPTY:
      case WORLD_WATER:
        break;
      /*-------------------------------WORLD PIPES------------------------------*/

      case WORLD_TUNNEL_RIGHT:
        loadLevel(levelTwo);
        break;
      case WORLD_TUNNEL_UP:
        loadLevel(levelThree);
        break;
      case WORLD_TUNNEL_RIGHT_3:
        loadLevel(levelFour);
        break;
      case WORLD_TUNNEL_RIGHT_4:
        loadLevel(levelFive);
        break;
      case WORLD_TUNNEL_RIGHT_5:
        loadLevel(levelSix);
        break;
      case WORLD_TUNNEL_RIGHT_6:
        loadLevel(levelSix2);
        break;
      case WORLD_PIPE_UP_SIDEQUEST1:
        loadLevel(sideQuest1);
        break;
      case WORLD_PIPE_BOTTOM:
        loadLevel(levelSeven);
        break;
      case WORLD_PIPE_BOTTOM_SIDEQUEST2:
        loadLevel(sideQuest2);
        break;
      case WORLD_PIPE_TOP7:
        loadLevel(levelEight);
        break;
      case WORLD_PIPE_RIGHT_SIDEQUEST3:
        loadLevel(sideQuest3);
        break;
      case WORLD_PIPE_TOP_SIDEQUEST3:
        loadLevel(sideQuest4);
        break;
      case WORLD_PIPE_TOP_SIDEQUEST4:
        loadLevel(levelEightTwo);
        break;
      case WORLD_TUNNEL_RIGHT_8:
        loadLevel(levelNine);
        break;
      case WORLD_TUNNEL_RIGHT_9:
        // var audio = new Audio("robo-explorer-level10-guitarRiff.wav");
        // audio.play();

        delayAudio();
        loadLevel(levelTen);
        break;
      /*-------------------------------WORLD FOREST------------------------------*/
      case WORLD_TREEVINES:
        loadLevel(levelForestTwo);
        break;
      /*-------------------------------WORLD COLLECTIBLES------------------------------*/
      case WORLD_SLINGSHOT:
        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        this.updateSlingshotReadout();
        break;
      case WORLD_SWORD:
        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        this.updateSwordReadout();
        break;
      case WORLD_ARROW:
        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        this.updateArrowReadout();
        break;
      case WORLD_SPEAR:
        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        this.updateSpearReadout();
        break;
      case WORLD_CROSSBOW:
        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        this.updateCrossbowReadout();
        break;
      case WORLD_WOODEN_BOW:
        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        this.updateWoodenBowReadout();
        break;

      case WORLD_ROCKET_BATTERY:
        // if (this.rocketEnergy == 0) {
          this.rocketEnergy = ROCKET_LIFE;
        // }

        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        // this.updateWoodenBowReadout();
        // ROCKET_LIFE == 100;
        // this.keyHeld_Fly = true;
        // blueHero.rocketEnergy = ROCKET_LIFE == 100;
        // this.keysHeld_Jump = true;
        break;
        case WORLD_ROCKET_RECHARGABLE_BATTERY:
          this.rocketEnergy = ROCKET_LIFE;
          worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
          this.onRechargableBattery = walkIntoTileIndex;
        break;
      case WORLD_DOOR:
        if (this.keysHeld > 0) {
          this.keysHeld--;
          this.updateKeyReadout();
          worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        }
        break;


      case WORLD_DAGGER:
        this.daggersHeld += 5;
        this.updateDaggerReadout();
        keyCollectionSound();
        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        break;

      case WORLD_VINES2:
        if (this.daggersHeld > 0) {
          this.daggersHeld--;
          this.updateDaggerReadout();
          worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
          loadLevel(levelForestThree);

        }
        break;
      case WORLD_VINES3:
        if (this.daggersHeld > 0) {
          this.daggersHeld--;
          this.updateDaggerReadout();
          worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
          finalBossAudio();
          loadLevel(levelForestFour);

        }
        break;

        case WORLD_LABDOOR:
         
           
           
            loadLevel(levelForestLaboratory);// need to write code to nly activate this when final Boss is killed.
  
         
          break;

      case WORLD_TREEBRANCH:
        if (this.daggersHeld > 0) {
          this.daggersHeld--;
          this.updateDaggerReadout();
          worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        }
        break;
      case WORLD_KEY:
        // console.log(this.name + " THIS IS THE KEY");
        // this.keysHeld;
        this.keysHeld++;
        this.updateKeyReadout();
        keyCollectionSound();
        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        break;



      // case WORLD_LADDER:
      //   if (this.keyHeld_Climb) {
      //     nextY -= PLAYER_MOVEMENT_SPEED + 20;
      //     console.log("keyHeld_Climb");
      //   }
      //   break;
      // case WORLD_LADDER_CONNECTOR:
      //   if (this.keyHeld_Climb && WORLD_LADDER_CONNECTOR) {
      //     nextY -= PLAYER_MOVEMENT_SPEED + 20;
      //     console.log("keyHeld_Climb");
      //   }
      //   break;
      case WORLD_RAT: //"kills" rat when player makes contact with rat
        // loadLevel(levelTwo);
        // nextX += PLAYER_MOVEMENT_SPEED + 10;
        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        break;
      case WORLD_TRAP:
        // alert("GAME OVER");
        // this.life--;
        // this.updateLifeReadout();
        // if(this.life = 0){

        // }

        break;

      default:
        break;
    }
  };

  // function animate(){
  //   this.myHeroPic,
  //   this.width,
  //   this.height,
  //   this.frameX,
  //   this.frameY

  // };

  /********************CODE FOR DRAW FUNCTION********************************************************************** */

  this.draw = function () {
    // drawBitmapCenteredWithRotation(this.myHeroPic, this.x, this.y, this.ang);
    this.animationCounter++;
    if (this.animationCounter == this.animationSpeed) {
      this.frame++;
      if (this.frame > this.numberOfFrames) {
        this.frame = 0;
      }
      this.animationCounter = 0;
    }

    if (++this.frame >= PLAYER_ANIM_FRAMES) {
      this.frame = 0;
    }
    
    if (this.moveDir == 0) {
      this.frame = 0;
    }

    var animationRow = 0;
    if (this.crawl > 0) {
      animationRow = 1;
    }


    if (this.fireSlingshot > 0) {
      animationRow = 2;
    }


    if (this.swordSlash > 0) {
      animationRow = 3;
    }

    if (this.swim > 0) {
      animationRow = 4;
    }

    if (this.regularJump > 0) {
      animationRow = 5;
    }

    if (this.climb > 0) {
      animationRow = 7;
    }

    /*
    canvasContext.drawImage(
      heroPic,
      this.frame * this.width, 0, //top left corner of spritesheet frame
      this.width, this.height, //size of frame
      this.x - this.width / 2, this.y - this.height / 2, //position on screen, centers image relative to self
      this.width, this.height //size of image on screen
     );*/
    var flipLeft = this.moveDir == -1;

    drawBitmapCenteredWithAnimationFlip(
      heroPic,
      this.x,
      this.y,
      this.width,
      this.height,
      this.frame,
      animationRow,
      flipLeft,
      this.flyAng
    );
  };
}
