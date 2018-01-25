function Track(){
  this.textScore = "Score: ";
  this.textJam = "Jam: ";
  this.valueJam = 1;
  this.valueScore = 0;
  this.img = new Image();
  //this.img.src = "images/rd-jammerDrch.png";
  //this.imgPeople = new Image();
  this.img.src = "images/rd-grada.png";

}

Track.prototype.render = function(){
  ctx.fillStyle = "#943126";
  ctx.fillRect(0, 0, canvasSize.w, canvasSize.h);
  ctx.fillStyle = "#FDFEFE";
  ctx.fillRect(0, 175, canvasSize.w, 5); //x,y
  ctx.fillStyle = "#FDFEFE";
  ctx.fillRect(0, 480, canvasSize.w, 5); //x,y
  for(var i=1, x = 0; i <=9; i++ ){
    ctx.drawImage(this.img, x, 110, 120, 60);
    x += 110;
  }
   

  //marcador
  ctx.fillStyle = "#FDFEFE";
  ctx.fillRect(250, 20, canvasSize.w/2-5, 60); //x,y
  ctx.fillStyle = "#943126";
  for(var i=1, x = 250; i <=50; i++ ){
    ctx.fillRect(x, 20, 5, 5);
    x += 10; 
  }

  for(var i=1, x = 250; i <=50; i++ ){
    ctx.fillRect(x, 30, 5, 5);
    x += 10; 
  }

  for(var i=1, x = 250; i <=50; i++ ){
    ctx.fillRect(x, 70, 5, 5);
    x += 10; 
  }

  ctx.font = "15px 'Press Start 2P'";
  ctx.fillText(this.textJam, 265, 60);
  ctx.fillText(this.valueJam, 320, 60);
  ctx.fillText(this.textScore, 610, 60);
  ctx.fillText(this.valueScore, 700, 60);

}

Track.prototype.renderWin = function(){
   this.render(ctx, canvasSize);
   ctx.fillStyle = "#FDFEFE";
   ctx.font = "40px 'Press Start 2P'";
   this.img.src = "images/rd-jammerDrch.png";
   ctx.drawImage(this.img, canvasSize.w/2-80, 240, 100, 100); 
   ctx.fillText("YOU WIN!!", canvasSize.w/2-180, 400);

}