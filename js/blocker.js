function Blocker(ptLanzamiento) {
  this.x =  canvasSize.w-60; //480;
  this.y = ptLanzamiento ;//canvasSize.h/2; //h=500-20 = 480
  this.scale = 1; //158/319;
  this.width = 60 * this.scale;
  this.heigh = 60;
  this.deathPoint = false;
  this.time = Date.now();
  this.img = new Image();
  this.img.src = "images/rd-blocker.png"; 
  this.pointSound = new Audio("sounds/rd-addPoint.wav");
  this.pointSound.volume = 0.1;
  //this.speed = 1;
}

Blocker.prototype.render = function(){
  ctx.drawImage(this.img, this.x, this.y, this.width, this.heigh);
};

Blocker.prototype.update = function(speed){
  this.x -= speed; 

}



