// const TRAP_MOVEMENT_SPEED = 2.0;
const TRAP_IMAGE_NAME = "trap";
const TRAP_FRAMES = 0;
const TRAP_DIM= 50; // DIM for dimension same width and height

function trapClass() {
  this.myTileKind = WORLD_TRAP;
  this.x = 75;
  this.y = 75;

//   this.speedX = TRAP_MOVEMENT_SPEED;

  this.width = TRAP_DIM;
  this.height = TRAP_DIM;
  this.frameX = 0;
  this.frameY = 0;

  //properties for sprite animation
  this.frame = 0;
  this.numberOfFrames = 3; //how many frames are in the spritesheet
  this.animationDelay = 5;
  this.animationCounter = 0;

  this.reset = function () {

    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] ==  this.myTileKind) {
          worldGrid[arrayIndex] = WORLD_EMPTY;
          // this.ang = -Math.PI / 2;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return true; //we found one 
        } //end of player start if
      } // end of col for
    } // end foe for
    return false; // no more traps
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
    if (approxDist < TRAP_DIM / 2){
       //
    }
  }
  
    //SPRITE ANIMATION CODE

  
    this.draw = function () {      
      var trapFrameW = TRAP_DIM;
      canvasContext.drawImage(
        trapPic,
        this.frame * trapFrameW,
        0, //top left corner of spritesheet frame
        trapFrameW,trapPic.height, //size of frame
        this.x-this.width/2,this.y-this.height/2,//location in world or on screen
        trapFrameW,trapPic.height //size of image on screen
      );
    };
  
};