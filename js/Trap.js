// const TRAP_MOVEMENT_SPEED = 2.0;
const TRAP_IMAGE_NAME = "trap";
const TRAP_FRAMES = 0;

function trapClass() {
  this.x = 75;
  this.y = 75;

//   this.speedX = TRAP_MOVEMENT_SPEED;

  this.width = 40;
  this.height = 50;
  this.frameX = 0;
  this.frameY = 0;

  //properties for sprite animation
  this.frame = 0;
  this.numberOfFrames = 1; //how many frames are in the spritesheet
  this.animationSpeed = 5;
  this.animationCounter = 0;

  this.reset = function () {

    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == WORLD_TRAP) {
          worldGrid[arrayIndex] = WORLD_EMPTY;
          // this.ang = -Math.PI / 2;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return;
        } //end of player start if
      } // end of col for
    } // end foe for
  }

  // this.move = function(){

  //   let nextX = this.x + this.speedX; //calc this in just one place
  //   let nextY = this.y; //no vert movement...yet
  //   //used for collision
  //   let nextTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
  //   let nextTileType = worldGrid[nextTileIndex];
  //   if(nextTileType == WORLD_EMPTY){
  //     this.x = nextX;
  //     this.y = nextY; 
  //   } else {
  //     this.speedX = -this.speedX;
  //     //no y behavior
  //   }
  // }

  
    //SPRITE ANIMATION CODE

  
    this.draw = function () {
    
      var frame = TRAP_FRAMES - Math.floor(this.life/TRAP_TIME_PER_FRAME)-1;
      // console.log(frame);
      var trapFrameW = 40;
      canvasContext.drawImage(
        trapPic,
        frame * trapFrameW,
        0, //top left corner of spritesheet frame
        trapFrameW,
        trapPic.height, //size of frame
        this.x - blueHero.width / 2,
        this.y - blueHero.height / 2, //position on screen, centers image relative to self
        trapFrameW,
        trapPic.height //size of image on screen
      );
    };
  
};