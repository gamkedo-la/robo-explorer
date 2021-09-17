// const BOMB_MOVEMENT_SPEED = 2.0;
const BOMB_IMAGE_NAME = "bomb";
const BOMB_FRAMES = 3;
const BOMB_TIME_PER_FRAME=10;

function bombClass() {
  this.x = 75;
  this.y = 75;

  //   this.speedX = RAT_MOVEMENT_SPEED;

  this.width = 40;
  this.height = 50;
  this.frameX = 0;
  this.frameY = 0;
  this.life=BOMB_TIME_PER_FRAME*BOMB_FRAMES;

  this.reset = function () {
    // for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
    //   for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
    //     var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
    //     if (worldGrid[arrayIndex] == WORLD_BOMB) {
    //       worldGrid[arrayIndex] = WORLD_EMPTY;
    //       // this.ang = -Math.PI / 2;
    //       this.x = eachCol * WORLD_W + WORLD_W / 2;
    //       this.y = eachRow * WORLD_H + WORLD_H / 2;
    //       return;
    //     } //end of player start if
    //   } // end of col for
    // } // end foe for
  };

  this.move =function () {
    //countdown timer set frame for fuse.
    if(this.life-- < 0){
      this.readyToRemove = true;
    }
  }

  this.draw = function () {
    
    var frame = BOMB_FRAMES - Math.floor(this.life/BOMB_TIME_PER_FRAME)-1;
    // console.log(frame);
    var bombFrameW = 40;
    canvasContext.drawImage(
      bombPic,
      frame * bombFrameW,
      0, //top left corner of spritesheet frame
      bombFrameW,
      bombPic.height, //size of frame
      this.x - bombPic.width / 2,
      this.y - bombPic.height / 2, //position on screen, centers image relative to self
      bombFrameW,
      bombPic.height //size of image on screen
    );
  };
}
