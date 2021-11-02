var heroPic = document.createElement("img");
var ratPic = document.createElement("img");
var bombPic = document.createElement("img");
var trapPic = document.createElement("img");
var rockPic = document.createElement("img");
// var waterPic = document.createElement("img");
var cockroachEggPic = document.createElement("img");
var bossPic = document.createElement("img");
var boyCocoonPic=document.createElement("img");
var smallWormPic=document.createElement("img");
var bossWormPic=document.createElement("img");

var trackPics = [];

var picsToLoad = 0; //set automatically based on imageList in loadImages

function countLoadedImagesAndLaunchIfReady() {
  picsToLoad--;
  //console.log(picsToLoad);
  if (picsToLoad == 0) {
    imageLoadingDoneSoStartGame();
  }
}

function beginLoadingImage(imgVar, fileName) {
  imgVar.onload = countLoadedImagesAndLaunchIfReady;
  imgVar.src = "images/" + fileName;
}

// function switchCostume(leftCostume,rightCostume,jumpCostume){
//     var costumeList = [
//         {varName: heroPic, rightCostume:"warrior.png"},
//         {varName: heroPic, leftCostume:"warrior2.png"},
//     ];

//     picsToLoad = imageList.length;
// }

function loadImageForTrackCode(trackCode, fileName) {
  trackPics[trackCode] = document.createElement("img");
  beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages() {
 
  var imageList = [
     //{ varName: heroPic, theFile: "rocketMan3.png"},
     { varName: heroPic, theFile: "robo-explorer-walkcycle12.png"},
    //{ varName: heroPic, theFile: "animationCyleSprites.png"},
    // { varName: waterPic, theFile: "sewerWater.png" },
    { varName: ratPic, theFile: "rat-walk-cycle.png"},
    { varName: bombPic, theFile: "bomb-sprite.png"},
    { varName: rockPic, theFile: "rock.png"},
    { varName: cockroachEggPic, theFile: "cockroachSprite.png"},
    { varName: bossPic, theFile: "bossCockroachSprite.png"},
    { varName: boyCocoonPic, theFile: "boyInCocoon.png" },
    { varName: smallWormPic, theFile: "smallWorm.png" },
    { varName: bossWormPic, theFile: "bigWorm3.png" },


    { varName: trapPic, theFile: "spike-sprite3.png" },
    // {trackType: WORLD_UPPERROAD, theFile:"WORLD_EMPTY3.png"},
    { trackType: WORLD_EMPTY, theFile: "track_road2.png" },
    //{ trackType: WORLD_EMPTY, theFile: "sky3.png" },
    { trackType: WORLD_WALL, theFile: "bricks9.png" },
    // { trackType: WORLD_SMALLBRICK, theFile: "smallBrick.png" },
    // { trackType: WORLD_FORESTGROUND1, theFile: "worldForest_ground1.png" },
    { trackType: WORLD_FORESTGROUND1, theFile: "worldForest_ground2.png" },
    { trackType: WORLD_WALL3, theFile: "worldForest_ground3.png" },
    { trackType: WORLD_CLOUD1, theFile: "cloud1.png" },
    { trackType: WORLD_BRIDGESTICKS, theFile: "bridgeSticks.png" },
    { trackType: WORLD_BRIDGEWOOD, theFile: "bridgeWood.png" },
    { trackType: WORLD_BRIDGEWOOD2_SOLID, theFile: "bridgeWood2.png" },
    { trackType: WORLD_BRIDGESTICKS2, theFile: "bridgeSticks2.png" },
    { trackType: WORLD_TREEVINES, theFile: "treeVines.png" },
    { trackType: WORLD_TREEVINES2, theFile: "treeVines2.png" },
    { trackType: WORLD_TREETRUNK1, theFile: "treeTrunk1.png" },
    { trackType: WORLD_TREETRUNK2, theFile: "treeTrunk2.png" },
    { trackType: WORLD_TREETRUNKSIDELEFT, theFile: "treeTrunkSideLeft.png" },
    { trackType: WORLD_TREELEAVES1, theFile: "treeLeaves1.png" },
    { trackType: WORLD_TREELEAVES2, theFile: "treeLeaves2.png" },
    { trackType: WORLD_TREELEAVES3, theFile: "treeLeaves3.png" },
    { trackType: WORLD_TREELEAVES4, theFile: "treeLeaves4.png" },
    { trackType: WORLD_TREEVINESLEFT, theFile: "treeVinesLeft.png" },
    { trackType: WORLD_TREEVINESRIGHT, theFile: "treeVinesRight.png" },
    { trackType: WORLD_VINES, theFile: "vines.png" },
    { trackType: WORLD_VINES2, theFile: "vines2.png" },
    { trackType: WORLD_VINES3, theFile: "vines3.png" },
    { trackType: WORLD_FORESTGRASS, theFile: "forestGrass.png" },
    { trackType: WORLD_FORESTGRASS2, theFile: "forestGrass2.png" },
    { trackType: WORLD_FORESTGRASS3, theFile: "forestGrass3.png" },
    { trackType: WORLD_MOUNTAIN, theFile: "mountain.png" },
    { trackType: WORLD_TREEBRANCH, theFile: "treeBranch.png" },
    { trackType: WORLD_DAGGER, theFile: "dagger.png" },
    { trackType: WORLD_LABORATORYENTRANCE, theFile: "laboratory.png" },
    { trackType: WORLD_LABORATORYINSIDE, theFile: "laboratoryInside.png" },
   
    
    { trackType: WORLD_SLINGSHOT, theFile: "tirador.png" },
    { trackType: WORLD_ROCK, theFile: "rock.png" },
    // { trackType: WORLD_LADDER, theFile: "track_ladder.png" },
    { trackType: WORLD_LADDER, theFile: "ladderBars.png" },
    // { trackType: WORLD_LADDER_CONNECTOR, theFile: "track_ladderConnector.png" },
    { trackType: WORLD_LADDER_CONNECTOR, theFile: "ladderBars-connector.png" },
    { trackType: WORLD_KEY, theFile: "key2.png" },
    { trackType: WORLD_DOOR, theFile: "sewerBar2.png" },
    { trackType: WORLD_TUNNEL_UP, theFile: "world_lowerTunnel.png" },
    { trackType: WORLD_SWORD, theFile: "sword.png" },
    { trackType: WORLD_TRAP, theFile: "spike-sprite.png" },
    { trackType: WORLD_SPEAR, theFile: "spear2.png" },
    { trackType: WORLD_ARROW, theFile: "world_arrow3.png" },
    { trackType: WORLD_RAT, theFile: "rat-walk-cycle.png" }, //visual feedback, did a WORLD_RAT not get scrubbed in worldGrid thru reset
    { trackType: WORLD_TUNNEL_RIGHT, theFile: "world_lowerTunnel-right.png" },
    { trackType: WORLD_TUNNEL_RIGHT_3, theFile: "world_lowerTunnel-right3.png" },
    { trackType: WORLD_TUNNEL_RIGHT_4, theFile: "world_lowerTunnel-right3.png" },
    { trackType: WORLD_TUNNEL_RIGHT_5, theFile: "world_lowerTunnel-right5.png" },
    { trackType: WORLD_TUNNEL_RIGHT_6, theFile: "world_lowerTunnel-right6.png" },
    { trackType: WORLD_TUNNEL_RIGHT_8, theFile: "world_lowerTunnel-right8.png" },
    { trackType: WORLD_TUNNEL_RIGHT_9, theFile: "world_lowerTunnel-right9.png" },
    { trackType: WORLD_PIPE_UP_SIDEQUEST1, theFile: "world_pipe_up_sidequest1.png" },
    { trackType: WORLD_PIPE_BOTTOM_SIDEQUEST2, theFile: "world_pipe_bottom_sidequest2.png" },
    { trackType: WORLD_CROSSBOW, theFile: "crossbow.png" },
    { trackType: WORLD_WOODEN_BOW, theFile: "bow2.png" },
    { trackType: WORLD_PIPE_BOTTOM, theFile: "world_pipe_bottom.png" },
    { trackType: WORLD_SKELETON, theFile: "skeleton2.png" },
    { trackType: WORLD_SKELETON2, theFile: "skeleton3.png" },
    { trackType: WORLD_SKELETON_HEADS, theFile: "skeleton-heads.png" },
    { trackType: WORLD_PIPE_TOP7, theFile: "world_pipe_top7.png" },
    { trackType: WORLD_SEWER_PIPE, theFile: "sewerPipe.png" },
   
    { trackType: WORLD_SEWER_PIPE_WITH_BAR, theFile: "sewerPipeWithBars.png" },
    
    { trackType: WORLD_SEWER_TRAP_LOCK_BAR, theFile: "sewerTrapLockDoor2.png" },
    { trackType: WORLD_SLIME_PIPE, theFile: "slimePipe.png" },
    { trackType: WORLD_PIPE_RIGHT_SIDEQUEST3, theFile: "world-pipe-right-sidequest3.png" },
    { trackType: WORLD_PIPE_TOP_SIDEQUEST3, theFile: "world-pipe-top-sidequest3.png" },
    { trackType: WORLD_PIPE_TOP_SIDEQUEST4, theFile: "world-pipe-top-sidequest4.png" },
    { trackType: WORLD_CURVE_PIPE, theFile: "curvePipes.png" },
    { trackType: WORLD_ROCKET_BATTERY, theFile: "rocketEnergy.png" },




    // { trackType: WORLD_LOST_BOY, theFile: "boy-v1.png" },
    { trackType: WORLD_LOST_BOY, theFile: "boyInCocoon.png" },
    // { trackType: WORLD_COCKROACH_EGG, theFile: "cockroachSprite.png"},

    { trackType: WORLD_WATER, theFile: "sewerWater.png" }
  
    

  ];

  picsToLoad = imageList.length;

  for (var i = 0; i < imageList.length; i++) {
    if (imageList[i].varName != undefined) {
      beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    } else {
      loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
    }
  }

  // for (var i = 0; i < imageList.length; i++) {
  //   if (imageList[i].varRat != undefined) {
  //     beginLoadingImage(imageList[i].varRat, imageList[i].theFile);
  //   } else {
  //     loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
  //   }
  // }
}
