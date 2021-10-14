const BOSS_MOVEMENT_SPEED = 20.0;
const BOSS_IMAGE_NAME = "boss";
const BOSS_FRAMES = 0;

var bossX = 75;
var bossY = 75;
// var this.speedX = 5;
// var this.speedY = 7;

function bossClass() {
  this.x = 75;
  this.y = 75;

  this.speedX = BOSS_MOVEMENT_SPEED;
  this.speedY = BOSS_MOVEMENT_SPEED;

  this.width = 100;
  this.height = 160;
  this.frameX = 0;
  this.frameY = 0;
  this.name = "untitled boss";

  //properties for sprite animation
  this.frame = 0;
  this.numberOfFrames = 2; //how many frames are in the spritesheet
  this.animationSpeed = 5;
  this.animationCounter = 0;

  this.reset = function () {
    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == WORLD_BOSS_COCKROACH) {
          worldGrid[arrayIndex] = WORLD_EMPTY;
          // this.ang = -Math.PI / 2;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return;
        } //end of player start if
      } // end of col for
    } // end foe for
  };

  this.move = function () {
    this.x += this.speedX;
    if (this.x < 200 && this.speedX < 0.0) {
      //left side
      this.speedX *= -1;
    }
    if (this.x > canvas.width && this.speedX > 0.0) {
      // right side
      this.speedX *= -1;
    }
    this.y += this.speedY;
    if (this.y < 0 && this.speedY < 0.0) {
      //top edge
      this.speedY *= -1;
    }

    if (this.y > canvas.height) {
      //bottom of the screen
      this.speedY *= -1;
      // ghostReset();
    }
  };

  this.draw = function () {
    var bossFrameW = 160;
    canvasContext.drawImage(
      bossPic,
      this.frame * bossFrameW,
      0, //top left corner of spritesheet frame
      bossFrameW,
      bossPic.height, //size of frame
      this.x - bossPic.width / 2,
      this.y - bossPic.height / 2, //position on screen, centers image relative to self
      bossFrameW,
      bossPic.height //size of image on screen
    );

    //SPRITE ANIMATION CODE

    this.animationCounter++;
    if (this.animationCounter == this.animationSpeed) {
      this.frame++;
      if (this.frame > this.numberOfFrames) {
        this.frame = 0;
      }
      this.animationCounter = 0;
    }
  };
  // console.log(this.animationCounter);
  // console.log(this.frame); //caught the problem...this is reaching beyond number of frames...
}
