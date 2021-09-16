const RAT_MOVEMENT_SPEED = 2.0;
const RAT_IMAGE_NAME = "rat";
const RAT_FRAMES = 0;

function ratClass() {
  this.x = 75;
  this.y = 75;

  this.speedX = RAT_MOVEMENT_SPEED;

  this.width = 40;
  this.height = 50;
  this.frameX = 0;
  this.frameY = 0;
  
  this.myRatPic;
  // this.name = "Untitled Rat";

  this.reset = function (whichImage, ratPic) {
    this.name = ratPic;
    this.myRatPic = whichImage;

    /*
    //var trackTypeHere = trackGrid[ trackIndex ]; // getting the track code for this tile        
    canvasContext.drawImage(useImg,
    0, // top-left corner of tile art, multiple of tile width
    WORLD_W, WORLD_H, // get full tile size from source
    drawTileX,drawTileY, // x,y top-left corner for image destination
    WORLD_W, WORLD_H); // draw full full tile size for destination          
    */
  }

  this.move = function(){

    let nextX = this.x + this.speedX; //calc this in just one place
    let nextY = this.y; //no vert movement...yet
    //used for collision
    let nextTile = getTileIndexAtPixelCoord(nextX, nextY) ;

    if(nextTile != WORLD_WALL){
      this.x = nextX;
      this.y = nextY; 
    } else {
      this.speedX = -this.speedX;
      //no y behavior
    }
  }

  this.draw = function(){
    canvasContext.drawImage(
      ratPic,
      this.x - ratPic.width / 2,
      this.y - ratPic.height / 2
    );

  }
  //   for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
  //     for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
  //       var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
  //       if (worldGrid[arrayIndex] == WORLD_RAT2) {
  //         worldGrid[arrayIndex] = WORLD_EMPTY;
  //         // this.ang = -Math.PI / 2;
  //         this.x = eachCol * WORLD_W + WORLD_W / 2;
  //         this.y = eachRow * WORLD_H + WORLD_H / 2;
  //         return;
  //       } //end of player start if
  //     } // end of col for
  //   } // endo frow for
  //   console.log("NO RAT START FOUND!");
  // }; // end of heroReset function
};