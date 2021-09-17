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
const START_PARTICLES=2;

function heroClass() {
  // var sound = document.getElementById("heroSound");
  // var play = 0;

  this.x = 75;
  this.y = 75;

  this.jumperOnGround = false;
  (this.jumperSpeedX = 0), (jumperSpeedY = 0);

  this.width = 40;
  this.height = 39;
  this.frameX = 0;
  this.frameY = 0;
  // this.ang = 0;
  // this.speed = 0;
  this.myHeroPic;
  this.name = "Untitled Explorer";
  this.keysHeld = 0;
  this.items = 0;
  // this.life = 3;

  this.keyHeld_Climb = false;
  this.keyHeld_ClimbDown = false;
  this.keyHeld_WalkLeft = false;
  this.keyHeld_WalkRight = false;
  this.keyHeld_Jump = false;
  this.keyHeld_Slingshot = false;
  // this.sound = false;

  this.controlKeyUp;
  this.controlKeyRight;
  this.controlKeyDown;
  this.controlKeyLeft;
  this.controlKeyJump;
  this.controlKeySlingshot
  // this.playSound = function(){
  //   if(play == 0){
  //     play = 1;
  //     sound.play();
  //   }else{
  //     play = 0;
  //     sound.pause();
  //   }
  // }

  this.setupInput = function (upKey, rightKey, downKey, leftKey, jumpKey,slingshotKey) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
    this.controlKeyJump = jumpKey;
    this.controlKeySlingshot = slingshotKey;
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


  /**************************CODE FOR CHARACTER TO MOVE*********************************** */
  this.move = function () {
    // this.speed *= GROUNDSPEED_DECAY_MULT;

    var nextX = this.x;
    var nextY = this.y;

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

    if (this.keyHeld_WalkLeft) {
      nextX -= PLAYER_MOVEMENT_SPEED;

      // switchCostume(costumeList[1]);
      // this.speed -= REVERSE_POWER;

    }

    if (this.keyHeld_WalkRight) {
      nextX += PLAYER_MOVEMENT_SPEED;

      // this.speed += DRIVE_POWER;
    }
    // this.x += Math.cos(this.ang) * this.speed;
    // this.y += Math.sin(this.ang) * this.speed;

    // heroTrackHandling(this);

    if (this.keyHeld_Slingshot) {
      
      addSlingShot();
      // console.log("");

      // this.speed += DRIVE_POWER;
    }else{
         removeSlingShot();
    }

    var walkIntoTileIndexTop = getTileIndexAtPixelCoord(nextX, nextY-this.height/2) ;
    var walkIntoTileTypeTop = WORLD_WALL;

    var walkIntoTileIndexBottom = getTileIndexAtPixelCoord(nextX, nextY+this.height/2);
    var walkIntoTileTypeBottom = WORLD_WALL;

    var walkIntoTileIndexLeft = getTileIndexAtPixelCoord(nextX-this.width/2, nextY);
    var walkIntoTileTypeLeft = WORLD_WALL;

    var walkIntoTileIndexRight = getTileIndexAtPixelCoord(nextX+this.width/2, nextY);
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

    // this.updateLifeReadout= function(){
    //   document.getElementById("life").innerHTML = "Life: " + this.life;
    // }
    if(this.keyHeld_Jump && walkIntoTileTypeTop == WORLD_EMPTY){
      this.y = nextY;
    }else if(walkIntoTileTypeTop != WORLD_EMPTY){
      this.y++;
    }

    if(this.keyHeld_Jump == false && walkIntoTileTypeBottom == WORLD_EMPTY){
      this.y = nextY;
    }else if(walkIntoTileTypeBottom != WORLD_EMPTY){
      // this.y--;//Makes character shake we will add a nicer fix.
      this.y = (1+Math.floor(this.y/WORLD_H))*WORLD_H-this.height/2;
    }

    if(this.keyHeld_WalkLeft && walkIntoTileTypeLeft == WORLD_EMPTY){
      this.x = nextX;
    }else if(walkIntoTileTypeLeft != WORLD_EMPTY){
      this.x++;
    }

    if(this.keyHeld_WalkRight && walkIntoTileTypeRight == WORLD_EMPTY){
      this.x = nextX;
    }else if(walkIntoTileTypeRight != WORLD_EMPTY){
      this.x--;
    }

   //Which Tile we are grabbing or opening.
    var walkIntoTileType = WORLD_EMPTY;
    var walkIntoTileIndex;
    if(this.keyHeld_WalkLeft){
      walkIntoTileType = walkIntoTileTypeLeft;
      walkIntoTileIndex = walkIntoTileIndexLeft;
    }else if(this.keyHeld_WalkRight){
      walkIntoTileType = walkIntoTileTypeRight;
      walkIntoTileIndex = walkIntoTileIndexRight;
    }else if(this.keyHeld_Jump){
      walkIntoTileType = walkIntoTileTypeTop;
      walkIntoTileIndex = walkIntoTileIndexTop;
    }else { // Feet
      walkIntoTileType = walkIntoTileTypeBottom;
      walkIntoTileIndex = walkIntoTileIndexBottom;
    }



    switch (walkIntoTileType) {
      case WORLD_EMPTY:
      break;
      // case WORLD_GOAL:
      //   console.log(this.name + " WINS!");
      //   loadLevel(levelOne);
      //   break;
      case WORLD_TUNNEL_RIGHT:
        loadLevel(levelTwo);
        // nextX += PLAYER_MOVEMENT_SPEED + 10;
        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        // this.updateSlingshotReadout();
        break;
      case WORLD_SLINGSHOT:
        // loadLevel(levelTwo);
        // nextX += PLAYER_MOVEMENT_SPEED + 10;

        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        this.updateSlingshotReadout();
        break;
      case WORLD_SWORD:
        // loadLevel(levelFour);
        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        this.updateSwordReadout();
        break;
      case WORLD_TUNNEL_UP:
        loadLevel(levelThree);
        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        break;
      case WORLD_ARROW:
        loadLevel(levelFour);
        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        this.updateArrowReadout();
        break;

      case WORLD_SPEAR:
        loadLevel(levelFive);
        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        this.updateSpearReadout();
        break;

      case WORLD_TUNNEL_RIGHT_5:
        loadLevel(levelSix);
        // nextX += PLAYER_MOVEMENT_SPEED + 10;
        worldGrid[walkIntoTileIndex] = WORLD_EMPTY;
        // this.updateSlingshotReadout();
        break;

      case WORLD_CROSSBOW:
        // loadLevel(levelFive);
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

  this.draw = function () {
    drawBitmapCenteredWithRotation(this.myHeroPic, this.x, this.y, this.ang);
  };
}
