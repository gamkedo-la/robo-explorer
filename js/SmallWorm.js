const SMALL_WORM_MOVEMENT_SPEED = 10.0;
const SMALL_WORM_IMAGE_NAME = "small_worm";
const SMALL_WORM_FRAMES = 3;
const SMALL_WORM_BOUNDARY =53;
const SMALL_WORM_HEALTH=10;

function smallWormClass() {
  this.myTileKind =WORLD_SMALLWORM;
  this.x = 75;
  this.y = 75;
  this.ang=0;
  this.readyToRemove=false;
  this.instance=1;

  this.speedX = SMALL_WORM_MOVEMENT_SPEED;
  this.speedY = SMALL_WORM_MOVEMENT_SPEED;

  this.health =10;
  this.width = 50;
  this.height = 50;
  this.frameY = 0;
   
  //properties for sprite animation
  
  this.frame = 0;
  this.numberOfFrames = 3; //how many frames are in the spritesheet
  this.animationSpeed = 5;
  this.animationCounter = 0;

  this.reset = function () {
    
    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == this.myTileKind) {
          worldGrid[arrayIndex] = WORLD_EMPTY;
          // this.ang = -Math.PI / 2;
          this.health = SMALL_WORM_HEALTH;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return true;
        } //end of player start if
      } // end of col for
    } // end foe for
    return false;
  }

  
  

  this.move = function(){ 
    this.x += this.speedX;
    if (this.x < canvas.width *0.1 && this.speedX < 0.0) {// left boundary
      //left side
      this.speedX *= -1;
    }
    if (this.x > canvas.width  *1.3 && this.speedX > 0.0) {
      // right side
      this.speedX *= -1;
    }
     this.y += this.speedY;
   
     if (this.y <  SMALL_WORM_BOUNDARY  && this.speedY < 0.0) { // top boundary
       //top edge
       this.speedY *= -1;
     }
    if (this.y > canvas.height - SMALL_WORM_BOUNDARY && this.speedY > 0.0 ) {
      //bottom of the screen
      this.speedY *= -1;
     
    }


    
  }

  this.draw = function(){
   
    var smallWormFrameW = 100;
    var smallWormFrameH = 50;// hide smallWorm row
    /*
    canvasContext.drawImage(
       smallWormPic ,
      this.frame * smallWormFrameW, 
      
      0, //top left corner of spritesheet frame
     
      smallWormFrameW = smallWormFrameW, 
      smallWormPic.height = smallWormFrameH, //size of frame
      this.x - smallWormPic.width / 2, 
      this.y - smallWormPic.height / 2, //position on screen, centers image relative to self
      smallWormFrameW, smallWormPic.height //size of image on screen
    );*/


  
    //SPRITE ANIMATION CODE
 
    this.animationCounter++;
    if(this.animationCounter == this.animationSpeed){
      this.frame++;
      if(this.frame > this.numberOfFrames){
        this.frame = 0;
      } 
      this.animationCounter = 0;
    }

      
    if (++this.frame >= SMALL_WORM_FRAMES) {
      this.frame = 0;
    } 

    
    var animationRow = 0;
    if (this.speedY > 0 ) {
      animationRow = 1;
     
    }

    
    var flipLeft = this.moveDir == -1;
    drawBitmapCenteredWithAnimationFlip(
      smallWormPic,
      this.x,
      this.y,
      this.width,
      this.height,
      this.frame,
      animationRow,
      flipLeft,
      this.flyAng
    );

 
  }
};