var canvas, canvasContext;
var blueHero = new heroClass();
var particles = new ballClass();

var ghostX = 75;
var ghostY = 75;
var ghostSpeedX = 5;
var ghostSpeedY = 7;

var monsterX = 75;
var monsterY = 75;
var monsterSpeedX = 5;
var monsterSpeedY = 7;

var camPanX = 0.0;
var camPanY = 0.0;

function ghostReset() {
  ghostX = canvas.width / 2;
  ghostY = canvas.height / 1.5;
}

function ghostMove() {
  ghostX += ghostSpeedX;
  if (ghostX < 0 && ghostSpeedX < 0.0) {
    //left side
    ghostSpeedX *= -1;
  }
  if (ghostX > canvas.width && ghostSpeedX > 0.0) {
    // right side
    ghostSpeedX *= -1;
  }
  ghostY += ghostSpeedY;
  if (ghostY < 0 && ghostSpeedY < 0.0) {
    //top edge
    ghostSpeedY *= -1;
  }
  // if (ghostY > canvas.height) { //bottom of the screen
  //     ghostReset();

  //     ghostSpeedY *= -1;
  // }
  if (ghostY > canvas.height) {
    //bottom of the screen
    ghostSpeedY *= -1;
    // ghostReset();
  }
}

function drawOnlyBricksOnScreen() {
  // what are the top-left most col and row visible on canvas?
  var cameraLeftMostCol = Math.floor(camPanX / WORLD_W);
  var cameraTopMostRow = Math.floor(camPanY / WORLD_H);

  // how many columns and rows of tiles fit on one screenful of area?
  var colsThatFitOnScreen = Math.floor(canvas.width / WORLD_W);
  var rowsThatFitOnScreen = Math.floor(canvas.height / WORLD_H);

  // finding the rightmost and bottommost tiles to draw.
  // the +1 and + 2 on each pushes the new tile popping in off visible area
  // +2 for columns since WORLD_W doesn't divide evenly into canvas.width
  var cameraRightMostCol = cameraLeftMostCol + colsThatFitOnScreen + 2;
  var cameraBottomMostRow = cameraTopMostRow + rowsThatFitOnScreen + 1;

  for (
    var eachCol = cameraLeftMostCol;
    eachCol < cameraRightMostCol;
    eachCol++
  ) {
    for (
      var eachRow = cameraTopMostRow;
      eachRow < cameraBottomMostRow;
      eachRow++
    ) {
      //  if( isBrickAtTileCoord(eachCol, eachRow) ) {
      //    var brickLeftEdgeX = eachCol * WORLD_W;
      //    var brickTopEdgeY = eachRow * WORLD_H;
      //    colorRect(brickLeftEdgeX, brickTopEdgeY,
      //             WORLD_W - WORLD_GAP, WORLD_H - WORLD_GAP, 'blue' );
      //  } // end of isBrickAtTileCoord()
    } // end of for eachRow
  } // end of for eachCol
} // end of drawBricks()

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  colorRect(0, 0, canvas.width, canvas.height, "black");
  colorText("LOADING IMAGES", canvas.width / 2, canvas.height / 2, "white");

  loadImages();
  ghostReset();
};

function imageLoadingDoneSoStartGame() {
  var framesPersecond = 30;
  setInterval(updateAll, 1000 / framesPersecond);
  setupInput();
  var audio = new Audio("Intro-BeepBox-Song.wav");
  audio.play();
  loadLevel(levelList[levelNow]);
  // worldGrid = levelOne;
  // blueCar.reset(otherCarPic, "Machine Raider");
  // blueHero.reset(heroPic, "Black Fire");
}

function nextLevel() {
  levelNow++;
  if (levelNow >= levelList.length) {
    levelNow = 0;
  }
  loadLevel(levelList[levelNow]);
}

function loadLevel(whichLevel) {
  worldGrid = whichLevel.slice();
  // blueCar.reset(otherCarPic, "Machine Raider");
  blueHero.reset(heroPic, "Black Fire");

  //worldGrid[30] = 5;
  //console.log(whichLevel[30]);
}

function updateAll() {
  moveAll();
  drawAll();
}

function moveAll() {
  blueHero.move();
  ghostMove();
  camPanX = blueHero.x - canvas.width / 2;

  camPanY = blueHero.y - canvas.height / 2;
}

function drawAll() {
  colorRect(0, 0, canvas.width, canvas.height, "black");
  canvasContext.save(); // needed to undo this .translate() used for scroll

  // this next line is like subtracting camPanX and camPanY from every
  // canvasContext draw operation up until we call canvasContext.restore
  // this way we can just draw them at their "actual" position coordinates
 

  canvasContext.translate(-camPanX, -camPanY);

  
  drawTracks();
  blueHero.draw();
  particles.draw();
  ghostCircle(ghostX, ghostY, 18, "black");
  ghostCircle(ghostX, ghostY, 12, "red");
  ghostCircle(ghostX + 2, ghostY, 5, "white");
  ghostCircle(ghostX, ghostY, 2, "black");

  // monsterCircle(monsterX, monsterY, 20, 'green');
  monsterCircle(monsterX, ghostY, 12, "green");
  monsterCircle(monsterX - 1, ghostY, 5, "white");
  monsterCircle(monsterX - 2, ghostY + 2, 2, "black");
  canvasContext.restore();
  drawOnlyBricksOnScreen();
 
  //Draw UI here
}
