function drawBitmapCenteredWithRotation(useBitmap, atX, atY, withAng) {
  canvasContext.save();
  canvasContext.translate(atX, atY);
  canvasContext.rotate(withAng);
  canvasContext.drawImage(
    useBitmap,
    -useBitmap.width / 2,
    -useBitmap.height / 2
  );
  canvasContext.restore();
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY,radius, 0, Math.PI * 2, true);
 }

function colorText(showWords, textX, textY, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillText(showWords, textX, textY);
}


/*************GHOST CODE*****************/
function ghostCircle(centerX, centerY, radius, fillColor) {
   canvasContext.fillStyle = fillColor;
   canvasContext.beginPath(); //hover functions 
   canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true); // this will work because the Math.PI * 2 will never change  nor the other lines and this is just simplifying things for us.  
   canvasContext.fill();

 }

/*************Baby GHOST CODE*********** */

function monsterCircle(centerX, centerY, radius, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath(); //hover functions 
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true); // this will work because the Math.PI * 2 will never change  nor the other lines and this is just simplifying things for us.  
  canvasContext.fill();

}


/****************Particle Code************/
function particleCircle(centerX, centerY, radius, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath(); //hover functions 
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true); // this will work because the Math.PI * 2 will never change  nor the other lines and this is just simplifying things for us.  
  canvasContext.fill();

}


function slingShotCircle(centerX, centerY, radius, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath(); //hover functions 
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true); // this will work because the Math.PI * 2 will never change  nor the other lines and this is just simplifying things for us.  
  canvasContext.fill();

}