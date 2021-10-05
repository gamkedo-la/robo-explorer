//NOTE TO SELF FOR GIT UPDATE myCarPic to myHeroPic Aug 13, 2021- Will remove later
// const GROUNDSPEED_DECAY_MULT = 0.94;
// const DRIVE_POWER = 0.5;
// const REVERSE_POWER = 0.2;
// const TURN_RATE = 0.06;
// const MIN_SPEED_TO_TURN = 0.5;
const PLAYER_MOVEMENT_SPEED = 10.0;
const JUMP_POWER = 15;
const GRAVITY = 0.5;
const AIR_RESISTANCE = 0.95;
const START_PARTICLES = 2;

function heroClass() {
  // var sound = document.getElementById("heroSound");
  // var play = 0;

  this.x = 75;
  this.y = 75;

  this.jumperOnGround = false;
  (this.jumperSpeedX = 0), (jumperSpeedY = 0);
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
  this.items = 0;
  // this.life = 3;
  this.moveDir = 0;
  this.fireSlingshot = 0;

  this.keyHeld_Climb = false;
  this.keyHeld_ClimbDown = false;
  this.keyHeld_WalkLeft = false;
  this.keyHeld_WalkRight = false;
  this.keyHeld_Jump = false;
  this.keyHeld_Slingshot = false;
  this.keyHeld_Bomb = false;
  // this.sound = false;

  this.controlKeyUp;
  this.controlKeyRight;
  this.controlKeyDown;
  this.controlKeyLeft;
  this.controlKeyJump;
  this.controlKeySlingshot;
  this.controlKeyBomb;
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
  this.numberOfFrames = 1; //how many frames are in the spritesheet
  this.animationSpeed = 5;
  this.animationCounter = 0;

  this.setupInput = function (
    upKey,
    rightKey,
    downKey,
    leftKey,
    jumpKey,
    slingshotKey,
    bombKey
  ) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
    this.controlKeyJump = jumpKey;
    this.controlKeySlingshot = slingshotKey;
    this.controlKeyBomb = bombKey;
  };

  this.reset = function (whichImage, heroName) {
    this.name = heroName;
    this.myHeroPic = whichImage;
    this.keysHeld = 0;
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

  this.updateSlingshotReadout = function () {
    document.getElementById("slingshot").innerHTML = "1. Slingshot";
  };

  this.updateSwordReadout = function () {
    document.getElementById("sword").innerHTML = "2. Sword";
  };

  this.updateArrowReadout = function () {
    document.getElementById("arrow").innerHTML = "3. Arrow";
  };

  this.updateSpearReadout = function () {
    document.getElementById("spear").innerHTML = "4. Spear";
  };

  this.updateCrossbowReadout = function () {
    document.getElementById("crossbow").style.display = "block";
    document.getElementById("collected-crossbows").innerHTML = "1";
  };

/**************************CODE FOR CHARACTER TO MOVE******************************************************/
  this.move = function () {
    // this.speed *= GROUNDSPEED_DECAY_MULT;

    var nextX = this.x;
    var nextY = this.y;

    /*-------------------------FOR ANIMATING FLIGHT OF CHARACTER-------------------*/
    if (this.keyHeld_Jump) {
      // beginLoadingImage(rocketBooster);

      nextY -= JUMP_POWER;
      for (var i = 0; i < START_PARTICLES; i++) {
        addParticles();
      }
      // addParticles();
      // addSlingShot();
      // console.log("JUMP_POWER");
    } else {
      nextY += GRAVITY + 10;
      removeParticles();
      // removeSlingShot();
      // if (this.jumperSpeedY > this.JUMPER_HEIGHT) {
      //   this.jumperSpeedY = this.height;
      // }
      //   // if(this.keyHeld_Jump == false){
      //   GRAVITY == 2;
      // }
    }

    // console.log("GRAVITY");

    // if (this.keyHeld_Climb) {
    //    // this.speed += DRIVE_POWER;
    //    nextY -= PLAYER_MOVEMENT_SPEED+10;
    // //   console.log("keyHeld_Climb");

    //  }
    if (this.keyHeld_ClimbDown) {
      // this.speed -= REVERSE_POWER;
    }

    /*-----------FOR ANIMATING MOVEMENT OF CHARACTER LEFT AND RIGHT-------- */
    this.moveDir = 0;
    if (this.keyHeld_WalkLeft) {
      nextX -= PLAYER_MOVEMENT_SPEED;
      this.moveDir = -1;
      // switchCostume(costumeList[1]);
      // this.speed -= REVERSE_POWER;
    }

    if (this.keyHeld_WalkRight) {
      nextX += PLAYER_MOVEMENT_SPEED;
      this.moveDir = 1;
      // this.speed += DRIVE_POWER;
    }
    // this.x += Math.cos(this.ang) * this.speed;
    // this.y += Math.sin(this.ang) * this.speed;
    // heroTrackHandling(this);

    /*--------------FOR ANIMATING SLINGSHOT----------------*/

    this.fireSlingshot = 1; //for animating slingshot
    if (this.keyHeld_Slingshot && this.keyHeld_WalkLeft) {
      this.fireSlingshot = -1;
      this.keyHeld_Slingshot = false;
      var audio = new Audio("slingShot2.wav");
      audio.play();
      addSlingShotLeft();

      // console.log("");

      // this.speed += DRIVE_POWER;
    }

    if (this.keyHeld_Slingshot && this.keyHeld_WalkRight) {
      this.fireSlingshot = 1;
      this.keyHeld_Slingshot = false;
      var audio = new Audio("slingShot2.wav");
      audio.play();
      addSlingShotRight();
    }

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

    if (this.keyHeld_Jump && walkIntoTileTypeTop == WORLD_EMPTY) {
      this.y = nextY;
    } else if (walkIntoTileTypeTop != WORLD_EMPTY) {
      this.y++;
    }

    if (this.keyHeld_Jump == false && walkIntoTileTypeBottom == WORLD_EMPTY) {
      this.y = nextY;
    } else if (walkIntoTileTypeBottom != WORLD_EMPTY) {
      // this.y--;//Makes character shake we will add a nicer fix.
      this.y = (1 + Math.floor(this.y / WORLD_H)) * WORLD_H - this.height / 2;
    }

    if (this.keyHeld_WalkLeft && walkIntoTileTypeLeft == WORLD_EMPTY) {
      this.x = nextX;
    } else if (walkIntoTileTypeLeft != WORLD_EMPTY) {
      this.x++;
    }

    if (this.keyHeld_WalkRight && walkIntoTileTypeRight == WORLD_EMPTY) {
      this.x = nextX;
    } else if (walkIntoTileTypeRight != WORLD_EMPTY) {
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
    
    if (this.keyHeld_Jump) {
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

    // this.reactToTileType(walkIntoTileType, walkIntoTileIndex);
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
        break;
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
      case WORLD_TUNNEL_RIGHT_8:
        loadLevel(levelNine);
        break;
      case WORLD_TUNNEL_RIGHT_9:
        loadLevel(levelTen);
        break;
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
      case WORLD_DOOR:
        if (this.keysHeld > 0) {
          this.keysHeld--;
          this.updateKeyReadout();
          worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        }
        break;
      case WORLD_KEY:
        // console.log(this.name + " THIS IS THE KEY");
        // this.keysHeld;
        this.keysHeld++;
        this.updateKeyReadout();
        var audio = new Audio("keyCollectionSound2.wav");
        audio.play();
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
    if (++this.frame >= 8) {
      this.frame = 0;
    }
    if (this.moveDir == 0) {
      this.frame = 0;
    }

    if (this.fireSlingshot == 0){
      this.frame = 3;
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
      0,
      flipLeft,
      this.flyAng
    );
  };
}
