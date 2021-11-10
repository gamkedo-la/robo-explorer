/*
// const WATER_MOVEMENT_SPEED = 2.0;
const WATER_IMAGE_NAME = "water";
const WATER_FRAMES = 0;
const WATER_DIM= 50; // DIM for dimension same width and height

function waterClass() {
  this.x = 75;
  this.y = 75;

//   this.speedX = WATER_MOVEMENT_SPEED;

  this.width = WATER_DIM;
  this.height = WATER_DIM;
  this.frameX = 0;
  this.frameY = 0;

  //properties for sprite animation
  this.frame = 0;
  this.numberOfFrames = 1; //how many frames are in the spritesheet
  this.animationDelay = 5;
  this.animationCounter = 0;

  this.reset = function () {

    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == WORLD_WATER) {
          worldGrid[arrayIndex] = WORLD_EMPTY;
          // this.ang = -Math.PI / 2;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return true; //we found one 
        } //end of player start if
      } // end of col for
    } // end foe for
    return false; // no more waters
  }
  
  this.move = function () {
    this.animationCounter++;
    if(this.animationCounter > this.animationDelay ){
      this.animationCounter = 0;
      this.frame++;
      if(this.frame >= this.numberOfFrames){
        this.frame = 0;
      }
    }
    var playerDistX = Math.abs(blueHero.x - this.x);
    var playerDistY = Math.abs(blueHero.y - this.y);
    var approxDist = playerDistX + playerDistY;
    if (approxDist < WATER_DIM / 2){
       //
    }
  }
  
    //SPRITE ANIMATION CODE

  
    this.draw = function () {      
      var waterFrameW = WATER_DIM;
      canvasContext.drawImage(
        waterPic,
        this.frame * waterFrameW,
        0, //top left corner of spritesheet frame
        waterFrameW,waterPic.height, //size of frame
        this.x-this.width/2,this.y-this.height/2,//location in world or on screen
        waterFrameW,waterPic.height //size of image on screen
      );
    };
  
};*/