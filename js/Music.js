// this only makes a new audio and downloads the sound ONCE for better perf
// (using a pool) and only plays it IF it's not already playing for no overlaps
function playSoundUnlessAlreadyPlaying(mp3) {
    if (!window.MP3s) window.MP3s = []; // create a pool of reusable audios
    if (!window.MP3s[mp3]) window.MP3s[mp3] = new Audio(mp3); // download once
    if (!window.MP3s[mp3].playing) window.MP3s[mp3].play(); // no spam please
    if (blueHero.health <= 0) window.MP3s[mp3].pause();//stop when hero dies.
}

function keyCollectionSound(){
    playSoundUnlessAlreadyPlaying("keyCollectionSound2.wav");
}

/*
function finalBossMusic(){
}*/

function ratCollisionSound(){
    playSoundUnlessAlreadyPlaying("ratSound2.mp3");
}
/*
function tunnelMusic(){
    playSoundUnlessAlreadyPlaying("darkSong2.mp3");
}*/
function uiToggle(){
    playSoundUnlessAlreadyPlaying("uiToggle2.mp3");
}


function itemCollection(){
    playSoundUnlessAlreadyPlaying("itemCollection.mp3");
}

function armorDamaged(){
    playSoundUnlessAlreadyPlaying("armorDamaged3.mp3");
}

function endingSong(){
    playSoundUnlessAlreadyPlaying("endingSong3.mp3");
}

function rocketError(){
    playSoundUnlessAlreadyPlaying("rocketPackError2.mp3");
}


function sword(){
    playSoundUnlessAlreadyPlaying("sword.mp3");
}


function spider(){
    playSoundUnlessAlreadyPlaying("spiderSound.mp3");
}


function bossCockRoachSound(){
    playSoundUnlessAlreadyPlaying("bossCockroachSound.mp3");
}


function finalBossWormSound(){
    playSoundUnlessAlreadyPlaying("wormSound.mp3");
}


function levelSound(){
    playSoundUnlessAlreadyPlaying("levelSound5.mp3");

}


function levelForestSound(){
    playSoundUnlessAlreadyPlaying("levelForestSound.mp3");

}