
const BABY_GHOST_MOVEMENT_SPEED = 2.0;
const BABY_GHOST_IMAGE_NAME = "baby_ghost";
const BABY_GHOST_FRAMES = 0;

function babyGhostClass() {

    this.monsterX = 75;
    this.monsterY = 75;
    this.monsterSpeedX = 5;
    this.monsterSpeedY = 7;



     this.move = function () {
        this.monsterX += this.monsterSpeedX;
         if (this.monsterX < 0 && this.monsterSpeedX < 0.0) {
             //left side
             this.monsterSpeedX *= -1;
         }
         if (this.monsterX > canvas.width && this.monsterSpeedX > 0.0) {
             // right side
             this.monsterSpeedX *= -1;
         }
         this.monsterY += this.monsterSpeedY;
         if (this.monsterY < 0 && this.monsterSpeedY < 0.0) {
             //top edge
             this.monsterSpeedY *= -1;
         }
         if (this.monsterY > canvas.height) {
             //bottom of the screen
             this.monsterSpeedY *= -1;
  
         }
     }

    this.draw = function (centerX, centerY, radius, fillColor) {

       
       
        // monsterCircle(monsterX, monsterY, 20, 'green');
        monsterCircle(this.monsterX, this.monsterY, 12, "green");
        monsterCircle(this.monsterX - 1, this.monsterY, 5, "white");
        monsterCircle(this.monsterX - 2, this.monsterY + 2, 2, "black");

    }
}
