const COCKROACH_EGG_MOVEMENT_SPEED = 2.0;
const COCKROACH_EGG_IMAGE_NAME = "cockroach_egg";
const COCKROACH_EGG_FRAMES = 0;

function cockroach_eggClass() {
  this.x = 75;
  this.y = 75;

  this.speedX = COCKROACH_EGG_MOVEMENT_SPEED;

  this.width = 40;
  this.height = 50;
  this.frameX = 0;
  this.frameY = 0;

  //properties for sprite animation
  this.frame = 0;
  this.numberOfFrames = 4; //how many frames are in the spritesheet
  this.animationSpeed = 5;
  this.animationCounter = 0;

  this.reset = function () {

    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == WORLD_COCKROACH_EGG) {
          worldGrid[arrayIndex] = WORLD_EMPTY;
          // this.ang = -Math.PI / 2;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return;
        } //end of player start if
      } // end of col for
    } // end foe for
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
    
    var cockroacheggFrameW = 40;
    canvasContext.drawImage(
      cockroachEggPic,
      this.frame * cockroacheggFrameW, 0, //top left corner of spritesheet frame
      cockroacheggFrameW, cockroachEggPic.height, //size of frame
      this.x - cockroachEggPic.width / 2, this.y - cockroachEggPic.height / 2, //position on screen, centers image relative to self
      cockroacheggFrameW, cockroachEggPic.height //size of image on screen
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
    
  }
};