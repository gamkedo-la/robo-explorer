var showCredits = false;

function drawCredits() {
  colorRect(0, 0, canvas.width, canvas.height, "black");
  canvasContext.textAlign = "left";
  var wasFont = canvasContext.font;
  canvasContext.font = "25px Arial";
  for(var i=0;i<creditsList.length;i++) {
    colorText(creditsList[i], 20, 40+i*26, "white");
  }
  canvasContext.font = wasFont;
  canvasContext.textAlign = "center";
  colorText("C key to toggle credits", canvas.width / 2, canvas.height-10, "white");
}

var creditsList = [
"Rodrigo Bonzerr Lopez: Project lead, core gameplay, main artist and animator, world design, sound effects, custom level editor, UI, enemy AI, marketing posts"," ",
"Ashleigh M.: Rat sprite, animation support, rat movement, cross-platform compatibility fix, initial collision implementation"," ",
"H Trayford: Bow item, level skip for testing, rocket energy bar functionality, collectibles fix, general enemy collision, map improvement, battery recharge, player class refactoring"," ",
"Christer \"McFunkypants\" Kaitila: Logo, gamepad support, audio pooling, door open and trap hit sounds, jump tuning, player ready screen"," ",
"Ryan Kevin Atienza: Rat collision, treasure artwork"," ",
"Tayyab Siddiqui: Practice commit"," ",
"Chris DeLeon: Compiled and integrated Credits",
];

function lineWrapCredits() { // note: gets calling immediately after definition!
  const newCut = [];
  var maxLineChar = 67;
  var findEnd;

  for(let i = 0; i < creditsList.length; i++) {
    const currentLine = creditsList[i];
    for(let j = 0; j < currentLine.length; j++) {
      /*const aChar = currentLine[j];
      if(aChar === ":") {
        if(i !== 0) {
          newCut.push("\n");
        }

        newCut.push(currentLine.substring(0, j + 1));
        newCut.push(currentLine.substring(j + 2, currentLine.length));
        break;
      } else*/ if(j === currentLine.length - 1) {
        if((i === 0) || (i >= creditsList.length - 2)) {
          newCut.push(currentLine);
        } else {
          newCut.push(currentLine.substring(0, currentLine.length));
        }
      }
    }
  }

  const newerCut = [];
  for(var i=0;i<newCut.length;i++) {
    while(newCut[i].length > 0) {
      findEnd = maxLineChar;
      if(newCut[i].length > maxLineChar) {
        for(var ii=findEnd;ii>0;ii--) {
          if(newCut[i].charAt(ii) == " ") {
            findEnd=ii;
            break;
          }
        }
      }
      newerCut.push(newCut[i].substring(0, findEnd));
      newCut[i] = newCut[i].substring(findEnd, newCut[i].length);
    }
  }

  creditsList = newerCut;
}
lineWrapCredits(); // note: calling immediately as part of init, outside the function