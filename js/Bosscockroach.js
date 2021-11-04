const BOSS_MOVEMENT_SPEED = 8.0; // frm 20.0 to 8.0 to reduce speed.
const BOSS_IMAGE_NAME = "boss";
const BOSS_FRAMES = 0;
const BOSS_ANIM_FRAMES=3;
const BOSS_LEFT_WALL_BOUNDARY=200;
const BOSS_RIGHT_WALL_BOUNDARY=1.3;
const BOSS_TOP_WALL_BOUNDARY=100; // 200 to 100 to make enemy reach top tiles 
const BOSS_BOTTOM_WALL_BOUNDARY=0.5; // 0.9 to 0.9 adjusted this to not make enemy go to the slime


var bossX = 75;
var bossY = 75;
// var this.speedX = 5;
// var this.speedY = 7;

function bossClass() {
  this.x = 75;
  this.y = 75;

  this.speedX = BOSS_MOVEMENT_SPEED;
  this.speedY = BOSS_MOVEMENT_SPEED;
  
  this.health; // setup inside the reset function
  this.width = 160;
  this.height = 160;
  this.frameX = 0;
  this.frameY = 0;
  this.fire = 0;
  this.name = "untitled boss";
  

  //properties for sprite animation
  this.moveDir=0;
  this.moveTop=0;
  this.frame = 0; 
  this.numberOfFrames = 2; //how many frames are in the spritesheet
  this.animationSpeed = 0;
  this.animationCounter = 0;

  this.reset = function () {
    this.health = 0;// Treat as dead if not in grid.
    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == WORLD_BOSS_COCKROACH) {
          worldGrid[arrayIndex] = WORLD_EMPTY;
          this.health = 10; // found in grid bringing to life.
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
    this.fire=0;
    if (this.x < BOSS_LEFT_WALL_BOUNDARY && this.speedX < 0.0) {// left boundary
      //left side
      this.fire=1;
      this.speedX *= -1;

    }else{
      this.fire=0;
    }

    if (this.x > canvas.width * BOSS_RIGHT_WALL_BOUNDARY && this.speedX > 0.0) {
      // right side
      this.speedX *= -1;
      
    }
    this.y += this.speedY;
     //this.y = 395;
    if (this.y < BOSS_TOP_WALL_BOUNDARY && this.speedY < 0.0) { // top boundary
      //top edge
      this.speedY *= -1;
    }

    if (this.y > canvas.height * BOSS_BOTTOM_WALL_BOUNDARY  && this.speedY > 0.0) {
      //bottom of the screen
      this.speedY *= -1;
      // ghostReset();
    }
  };

  this.draw = function () {
    
    if (this.health <= 0){
      return; 
    }
    var bossFrameW = 160;
    var bossFrameH = 160; // added this to hide second row of animation
    canvasContext.drawImage(
      bossPic,
      this.frame * bossFrameW,
      0, //top left corner of spritesheet frame
      bossFrameW,
      bossPic.height = bossFrameH, //size of frame (assigned the bossFrameH variable to hide second frame)
      this.x - bossPic.width / 2,
      this.y - bossPic.height/ 2, //position on screen, centers image relative to self
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

    
    if (++this.frame >= BOSS_ANIM_FRAMES) {
      this.frame = 0;
    } 



    /*
    if (this.moveDir == 0) {
      this.frame = 0;
    }*/

    
    var animationRow = 0;
    if (this.fire > 0 ) {// left boundary
      //left side
      animationRow = 1;

    }
   
    var flipLeft = this.moveDir == -1;
    drawBitmapCenteredWithAnimationFlip(
      bossPic,
      this.x,
      this.y,
      this.width,
      this.height,
      this.frame,
      animationRow =2,
      flipLeft,
      this.flyAng
    );
  };

  // console.log(this.animationCounter);
  // console.log(this.frame); //caught the problem...this is reaching beyond number of frames...


  /**COLLISSION WITH SLINGSHOT**************** */
  /****************** */
  /*********************************** */
  /********************************** */
  /****************** */







}
