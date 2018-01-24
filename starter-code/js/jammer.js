function Jammer(maxSpeed) {
  this.x = 10; //heigh
  this.y = 390; //480-100
  this.speedX = 0;
  this.speedY = 0;
  this.maxSpeed = maxSpeed;
  this.scale = 1; //158/319;
  this.width = 70 * this.scale;
  this.heigh = 70;
  this.img = new Image();
  this.img.src = "images/rd-jammerDrch.png"; //"images/rd-jammer.gif";  
  this.points = 0;
  this.delta = 0;
  this.won = false;
}

Jammer.prototype.render = function (ctx) {
  this.x += this.speedX/1000*this.delta; 
  this.y += this.speedY/1000*this.delta; 
  
  if(this.y <= 120) this.y = 120;
  if(this.y >= 410) this.y = 410;
  if (this.x >= 930) this.x = 930;
  if (this.x <= 0) this.x = 0;

  ctx.drawImage(this.img, this.x, this.y, this.width, this.heigh); 
};

Jammer.prototype.moveX = function (direction) {
  this.speedX = this.maxSpeed * direction;

}

Jammer.prototype.moveY = function (direction) {
  this.speedY = this.maxSpeed * direction;

}

Jammer.prototype.stop = function () {
  this.speedX = 0;
  this.speedY = 0;
}

Jammer.prototype.moveJammer = function (key) {
  switch (key) {
    case 38: //up 
      this.moveY(-2);
      break;
    case 40: //down 
      this.moveY(2);
      break;
    case 39: // derecha
      this.moveX(2);
      break;
    case 37: //izq
      this.moveX(-2);
      break;
  }
}