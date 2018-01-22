function Blocker(canvasSize) {
  this.x =  canvasSize.w-60; //480;
  this.y = canvasSize.h/2; //480-100
  this.scale = 1; //158/319;
  this.img = new Image();
  this.img.src = "images/rd-blocker.png"; 
}

Blocker.prototype.render = function(ctx){
  ctx.drawImage(this.img, this.x, this.y, 60 * this.scale, 60);
};

Blocker.prototype.update = function(){

  this.x -= 1; 

}


