var levelList;

function hideItems() {
  // var items = document.getElementByClass("black_interface");
  // black_interface.style.display = "none";
  var state = document.getElementById("black__interface").style.display;
  if (state == "block") {
    document.getElementById("black__interface").style.display = "none";
  } else {
    document.getElementById("black__interface").style.display = "block";
  }
}

function hideStoryMenu() {
  var state = document.getElementById("storyMenu").style.display;
  if (state == "block") {
    document.getElementById("storyMenu").style.display = "none";
  } else {
    document.getElementById("storyMenu").style.display = "block";
    document.getElementById("storyMenu").style.transform = "scale(100%)";
    document.getElementById("storyMenu").style.transform =
      "translate(-50%,-50%)";
  }
}


/***************STORY MENU TERROFADIA TUNNEL**************************** */
var i = 0;
var storyTxt =
  "The world is in ruins… year 2044, resources are low, and humanity is looking for a way to salvage the remaining resources for survival. Robo Explorer is a humanoid that was created by Dr. Ambervad. As a last resort to a dying civilization. This humanoid was once a human being that was one of the casualties of the “GREAT WAR”. Dr. Ambervad was able to salvage the brain of the man who once saved him during the chaotic war that happened five years ago. There are other survivors in the City of Terrofadia that depends on Dr. Ambervad’s leadership. A small number of remaining residents in the city after it was destroyed by the aftermath of the “GREAT WAR”. Dr. Ambervad was one of the people who decided to take in some of the survivors into his laboratory that was secured from the aftermath of the war. He continued searching for survivors and helped them by inviting them into his lair to provide some roof and supplies to them. Dr. Ambervad organized the people in groups when exploring at first but due to the aftermath of the “GREAT WAR”, more and more monsters are appearing within the city. Monsters that mutated from the bio genetic elements that was released during the war. This puts the lives of the people at stake every time they try to explore the city for supplies and other survivors. One day, Dr. Ambervad was alerted by one of the citizens of TERROFADIA, a mother was looking for her child that got lost in the TERROFADIA TUNNELS when the kid accidentally fell from one of the open holes in the destroyed city while playing with the other kids. When Robo-Explorer heard that a young boy was lost in the Terrofadia tunnels. His mechanical brain suddenly sparked, and he volunteered to Dr. Ambervard to try and look for the young boy.... "; 
var speed = 50; /* This is the speed/duration of the effect in milliseconds */

function tunnelStory() {
  if (i < storyTxt.length) {
    document.getElementById("story").innerHTML += storyTxt.charAt(i);
    i++;
    setTimeout(tunnelStory, speed);
  }
}
