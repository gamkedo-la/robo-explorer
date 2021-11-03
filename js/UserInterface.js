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

