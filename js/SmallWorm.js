const SMALL_WORM_MOVEMENT_SPEED = 10.0;
const SMALL_WORM_IMAGE_NAME = "small_worm";
const SMALL_WORM_FRAMES = 0;

function smallWormClass() {
  this.x = 75;
  this.y = 75;
  this.ang=0;
  this.readyToRemove=false;
  this.instance=1;

  this.speedX = SMALL_WORM_MOVEMENT_SPEED;
  this.speedY = SMALL_WORM_MOVEMENT_SPEED;


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
        if (worldGrid[arrayIndex] == WORLD_SMALLWORM) {
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
    // this.ang += 0.02;
    this.x = 300;
    if (this.x < 0 && this.speedX < 0.0) {// left boundary
      //left side
      this.speedX *= -1;
    }
    if (this.x > canvas.width *1.3 && this.speedX > 0.0) {
      // right side
      this.speedX *= -1;
    }
    
    this.y += this.speedY;
   
     if (this.y < 0 && this.speedY < 0.0) { // top boundary
       //top edge
       this.speedY *= -1;
     }
    if (this.y > canvas.height - 53 ) {
      //bottom of the screen
      this.speedY *= -1;
      this.speedX *= 5;
    }


    
  }

  this.draw = function(){
   
    var smallWormFrameW = 50;
    canvasContext.drawImage(
       smallWormPic,
      this.frame * smallWormFrameW, 0, //top left corner of spritesheet frame
      smallWormFrameW, smallWormPic.height, //size of frame
      this.x - smallWormPic.width / 2, this.y - smallWormPic.height / 2, //position on screen, centers image relative to self
      smallWormFrameW, smallWormPic.height //size of image on screen
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