const FINALBOSS_MOVEMENT_SPEED = 20.0;
const FINALBOSS_IMAGE_NAME = "boss";
const FINALBOSS_FRAMES = 0;
const FINAL_BOSS_HEALTH =10;

var bossWormX = 75;
var bossWormY = 75;
// var this.speedX = 5;
// var this.speedY = 7;

function finalBossClass() {
  this.x = 75;
  this.y = 75;

  this.speedX = FINALBOSS_MOVEMENT_SPEED;
  this.speedY = FINALBOSS_MOVEMENT_SPEED;
 this.health; // setup inside the reset function
  this.width = 160;
  this.height = 160;
  this.frameX = 0;
  this.frameY = 0;
  this.name = "untitled boss";
 

  //properties for sprite animation
  this.moveDir = 0;
  this.frame = 0;
  this.numberOfFrames = 5; //how many frames are in the spritesheet
  this.animationSpeed = 8;
  this.animationCounter = 0;

  this.reset = function () {
    this.health = 0;// Treat as dead if not in grid.
    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == WORLD_FINALBOSSWORM) {
          worldGrid[arrayIndex] = WORLD_EMPTY;
          this.health = FINAL_BOSS_HEALTH; // found in grid bringing to life.
          // this.ang = -Math.PI / 2;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return;
        } //end of player start if
      } // end of col for
    } // end foe for
  };

  this.move = function () {
    if (this.health <= 0){
      return; 
    }
    this.x += this.speedX;
    if (this.x < BOSS_LEFT_WALL_BOUNDARY + 600 && this.speedX < 0.0) {// left boundary
      //left side
      this.speedX *= -1;
    //  this.moveDir = 1;

    }
    if (this.x > canvas.width *2 && this.speedX > 0.0) {
      // right side
      this.speedX *= -1;
    }
    // this.y += this.speedY;
     this.y = 489;
    if (this.y < 200 && this.speedY < 0.0) { // top boundary
      //top edge
      this.speedY *= -1;
    }

    if (this.y > canvas.height  && this.speedY > 0.0) {
      //bottom of the screen
      this.speedY *= -1;
      // ghostReset();
    }
  };

  this.draw = function () {
    if (this.health <= 0){
      return; 
    }
    var bossWormFrameW = 294;
    canvasContext.drawImage(
        bossWormPic,
      this.frame*bossWormFrameW,
      0, //top left corner of spritesheet frame
      bossWormFrameW,
      bossWormPic.height, //size of frame
      this.x - bossWormPic.width / 2,
      this.y - bossWormPic.height / 2, //position on screen, centers image relative to self
      bossWormFrameW,
      bossWormPic.height //size of image on screen
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

  var flipRight = this.moveDir == -1;
  
  /*

  drawBitmapCenteredWithAnimationFlip(
    bossWormPic,
    this.x,
    this.y,
    this.width,
    this.height,
    this.frame,
    animationRow =2,
    flipRight,
    this.flyAng
  );*/

  // console.log(this.animationCounter);
  // console.log(this.frame); //caught the problem...this is reaching beyond number of frames...


  /**COLLISSION WITH SLINGSHOT**************** */
  /****************** */
  /*********************************** */
  /********************************** */
  /****************** */







}
