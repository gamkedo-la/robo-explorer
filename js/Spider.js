const SPIDER_MOVEMENT_SPEED = 2.0;
const SPIDER_IMAGE_NAME = "spider";
const SPIDER_FRAMES = 0;

function spiderClass() {
  this.myTileKind =WORLD_SPIDER;
  this.x = 75;
  this.y = 75;

  this.speedX = SPIDER_MOVEMENT_SPEED;

  this.width = 40;
  this.height = 50;
  this.frameX = 0;
  this.frameY = 0;

  //properties for sprite animation
  this.frame = 0;
  this.numberOfFrames = 2; //how many frames are in the spritesheet
  this.animationSpeed = 5;
  this.animationCounter = 0;

  this.reset = function () {

    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == this.myTileKind) {
          worldGrid[arrayIndex] = WORLD_EMPTY;
          // this.ang = -Math.PI / 2;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return true;
        } //end of player start if
      } // end of col for
    } // end foe for
    return false;
  }

  this.move = function(){

    let nextX = this.x + this.speedX; //calc this in just one place
    let nextY = this.y; //no vert movement...yet
    //used for collision
    let nextTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
    let nextTileType = worldGrid[nextTileIndex];
    if(nextTileType == WORLD_EMPTY){
      this.x = nextX;
      this.y = nextY; 
    } else {
      this.speedX = -this.speedX;
      //no y behavior
    }
  }

  this.draw = function(){
    
    var spiderFrameW = 50;
    canvasContext.drawImage(
      spiderPic,
      this.frame * spiderFrameW, 0, //top left corner of spritesheet frame
      spiderFrameW, spiderPic.height, //size of frame
      this.x - spiderPic.width / 2, this.y - spiderPic.height / 2, //position on screen, centers image relative to self
      spiderFrameW, spiderPic.height //size of image on screen
    );
  
    //SPRITE ANIMATION CODE

    this.animationCounter++;
    if(this.animationCounter == this.animationSpeed){
      this.frame++;
      if(this.frame > this.numberOfFrames){
        this.frame = 0;
      } 
      this.animationCounter = 0;
    }
    // console.log(this.animationCounter);
    // console.log(this.frame); //caught the problem...this is reaching beyond number of frames...
  }
};