function Blocker(canvasSize, ptLanzamiento) {
  this.x =  canvasSize.w-60; //480;
  this.y = (canvasSize.h-20) - ptLanzamiento ;//canvasSize.h/2; //h=500-20 = 480
  this.scale = 1; //158/319;
  this.width = 60 * this.scale;
  this.heigh = 60;
  this.deathPoint = false;
  this.time = Date.now();
  this.img = new Image();
  this.img.src = "images/rd-blocker.png"; 
}

Blocker.prototype.render = function(ctx){
  ctx.drawImage(this.img, this.x, this.y, this.width, this.heigh);
};

Blocker.prototype.update = function(){

  this.x -= 1; 

}


