function Jammer() {
  this.x = 10; //heigh
  this.y = 390; //480-100
  this.scale = 1; //158/319;
  this.img = new Image();
  this.img.src = "images/rd-jammer.png";
}

Jammer.prototype.render = function (ctx) { 
    ctx.drawImage(this.img, this.x, this.y, 90 * this.scale, 90); 

};


Jammer.prototype.moveJammer = function (key) {
  switch (key) {
    case 38: //up //37 = izquierda
      this.y -= 5;
      //this.x += 5;
      if (this.y < 100) {
        this.y = 100;
      }
      break;
    case 40: //down //39 = derecha
      this.y += 5;
      //this.x += 5;
      if (this.y > 390) {
        this.y = 390;
      }
      break;
    case 39: //down //39 = derecha
      this.x += 5;
      if (this.x > 910) {
        this.x = 910;
      }
      break;
    case 37: //down //39 = derecha
      this.x -= 5;
      if (this.x < 1) {
        this.x = 0;
      }
      break;
    
    
  }
}