const BOY_COCOON_MOVEMENT_SPEED = 2.0;
const BOY_COCOON_IMAGE_NAME = "boy_cocoon";
const BOY_COCOON_FRAMES = 0;

function boyCocoonClass() {
  this.x = 75;
  this.y = 75;
  this.readyToRemove=false;
  this.instance=1;

  this.speedX = BOY_COCOON_MOVEMENT_SPEED;

  this.width = 80;
  this.height = 80;
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
        if (worldGrid[arrayIndex] == WORLD_BOY_COCOON) {
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
   

  }

  this.draw = function(){
   
    var boyCocoonFrameW = 80;
    canvasContext.drawImage(
        boyCocoonPic,
      this.frame * boyCocoonFrameW, 0, //top left corner of spritesheet frame
      boyCocoonFrameW, boyCocoonPic.height, //size of frame
      this.x - boyCocoonPic.width / 2, this.y - boyCocoonPic.height / 2, //position on screen, centers image relative to self
      boyCocoonFrameW, boyCocoonPic.height //size of image on screen
    );
  
    //SPRITE ANIMATION CODE
 /*
    this.animationCounter++;
    if(this.animationCounter == this.animationSpeed){
      this.frame++;
      if(this.frame > this.numberOfFrames){
        this.frame = 0;
      } 
      this.animationCounter = 0;
    }
   */ 
  }
};