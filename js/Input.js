// const KEY_LEFT_ARROW = 37; //keyboard A
// const KEY_UP_ARROW = 38; // keyboard W
// const KEY_RIGHT_ARROW =39 ;//keyboard D
// const KEY_DOWN_ARROW = 40;// keyboard S

const KEY_W = 87; // keyboard W
const KEY_A = 65; //keyboard A
const KEY_S = 83; // keyboard S
const KEY_D = 68; //keyboard D
const KEY_SPACEBAR = 32; //JUMP
const KEY_R=82;//SlingshotBullet
const KEY_B=66;//Bomb
const KEY_C=67;//cheat key
const KEY_E=69;//Sword
const LSHIFT_KEY =16;

const KEY_1 = 49; // keyboard 1
const KEY_2 = 50; // keyboard 2
const KEY_3 = 51; // keyboard 3
const KEY_4 = 52; // keyboard 4
const KEY_5 = 53; // keyboard 5
const KEY_6 = 54; // keyboard 6
const KEY_7 = 55; // keyboard 7
const KEY_8 = 56; // keyboard 8
const KEY_9 = 57; // keyboard 9


// const KEY_E =

var mouseX = 0;
var mouseY = 0;

function setupInput() {
  canvas.addEventListener("mousemove", updateMousePosition);
  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);

  blueHero.setupInput(KEY_W, KEY_D, KEY_S, KEY_A, KEY_SPACEBAR,KEY_R,KEY_B,KEY_E,LSHIFT_KEY);
  //   blueCar.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
}

function updateMousePosition(mouseEvent) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  mouseX = mouseEvent.clientX - rect.left - root.scrollLeft;
  mouseY = mouseEvent.clientY - rect.top - root.scrollTop;
}

/*****************KEY PRESSED CODE********************* */
function keySet(keyEvent, setTo) {
  if (keyEvent.keyCode == blueHero.controlKeyLeft) {
    blueHero.keyHeld_WalkLeft = setTo;
  }

  if (keyEvent.keyCode == blueHero.controlKeyRight) {
    blueHero.keyHeld_WalkRight = setTo;
  }

  if (keyEvent.keyCode == blueHero.controlKeyUp) {
    blueHero.keyHeld_Climb = setTo;
  }

  if (keyEvent.keyCode == blueHero.controlKeyDown) {
    blueHero.keyHeld_ClimbDown = setTo;
  }

  if (keyEvent.keyCode == blueHero.controlKeyFly) {
    blueHero.keyHeld_Fly = setTo;
  }

  if (keyEvent.keyCode == blueHero.controlKeySlingshot) {
    blueHero.keyHeld_Slingshot = setTo;
  }

  if (keyEvent.keyCode == blueHero.controlKeyBomb) {
    blueHero.keyHeld_Bomb = setTo;
  }
  
  if (keyEvent.keyCode == blueHero.controlKeySword) {
    blueHero.keyHeld_Sword = setTo;
  }

  if (keyEvent.keyCode == blueHero.controlKeyLshift) {
    blueHero.keyHeld_LShiftKey = setTo;
  }
  
  
}
function keyPressed(evt) {

  if (CHEATS_ENABLED) {
    checkForCheatKeys(evt.keyCode)
  }

  keySet(evt, true);
  // keySet(evt,blueHero,true);
  // keySet(evt,blueCar,true);
  evt.preventDefault();
}

function keyReleased(evt) {
  keySet(evt, false);
  // keySet(evt,blueHero,false);
  // keySet(evt,blueCar,false);
}

function checkForCheatKeys (keyCode) {
  switch (keyCode) {
    case KEY_C: 
      blueHero.keysHeld = 999;
      break
    case KEY_1: 
      worldNow=0;
      levelList=worldList[worldNow];
      levelNow =0;
      loadLevel(levelList[levelNow]); 
      break
    case KEY_2:
      worldNow=1;
      levelList=worldList[worldNow];
      levelNow =0;
      loadLevel(levelList[levelNow]); 
      break
    
      case KEY_3:
        worldNow=2;
        levelList=worldList[worldNow];
        levelNow =0;
        loadLevel(levelList[levelNow]); 
        break
    case KEY_4:
      levelNow++;
      if (levelNow >= levelList.length){
        levelNow = levelList.length -1;
      }
      loadLevel(levelList[levelNow]); 
      break
    case KEY_5:
      levelNow--;
      if (levelNow < 0){
        levelNow = 0;
      }
      loadLevel(levelList[levelNow]); 
      break
    
     
      
    /*
    case KEY_6:
      loadLevel(levelSix);
      break
    case KEY_7:
      loadLevel(levelSeven); 
      break
    case KEY_8:
      loadLevel(levelEight); 
      break
    case KEY_9:
       loadLevel(levelNine);
      break  
       
      */                                                                   
      default:
        break;
    }
}
