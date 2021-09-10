const RAT_MOVEMENT_SPEED = 2.0;

function ratClass() {
  this.x = 75;
  this.y = 75;

  this.width = 40;
  this.height = 50;
  this.frameX = 0;
  this.frameY = 0;
  
  this.myRatPic;
  this.name = "Untitled Rat";

  this.reset = function (whichImage, ratPic) {
    this.name = ratPic;
    this.myRatPic = whichImage;

    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == WORLD_RAT2) {
          worldGrid[arrayIndex] = WORLD_EMPTY;
          // this.ang = -Math.PI / 2;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return;
        } //end of player start if
      } // end of col for
    } // endo frow for
    console.log("NO RAT START FOUND!");
  }; // end of heroReset function
};