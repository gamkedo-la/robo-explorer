var levelList;


function hideItems(){
    // var items = document.getElementByClass("black_interface");
    // black_interface.style.display = "none";
    var state = document.getElementById('black__interface').style.display;
    if (state == 'block'){
        document.getElementById('black__interface').style.display = 'none';
    }else{
        document.getElementById('black__interface').style.display ="block";
    }
    

}

function hideStoryMenu(){
    
    var state = document.getElementById('storyMenu').style.display;
    if (state == 'block'){
        document.getElementById('storyMenu').style.display = 'none';
    }else{
        document.getElementById('storyMenu').style.display ="block";
        document.getElementById("storyMenu").style.transform = "scale(100%)";
        document.getElementById("storyMenu").style.transform = "translate(-50%,-50%)";
    }
    
}



