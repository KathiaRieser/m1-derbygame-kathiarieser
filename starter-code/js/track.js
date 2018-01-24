function Track(){

  this.textScore = "Score: ";
  this.textJam = "Jam: ";
  this.valueJam = 1;
  this.valueScore = 0;
  this.img = new Image();
  this.img.src = "images/rd-jammerDrch.png"; 

}

Track.prototype.render = function(ctx, canvasSize){

  ctx.fillStyle = "#943126";
  ctx.fillRect(0, 0, canvasSize.w, canvasSize.h);
  ctx.fillStyle = "#FDFEFE";
  ctx.fillRect(0, 175, canvasSize.w, 5); //x,y
  ctx.fillStyle = "#FDFEFE";
  ctx.fillRect(0, 480, canvasSize.w, 5); //x,y

  //marcador
  ctx.fillStyle = "#FDFEFE";
  ctx.fillRect(250, 20, canvasSize.w/2, 60); //x,y
  ctx.fillStyle = "#943126";
  ctx.font = "15px 'Press Start 2P'";
  ctx.fillText(this.textJam, 260, 60);
  ctx.fillText(this.valueJam, 315, 60);

  ctx.fillText(this.textScore, 610, 60);
  ctx.fillText(this.valueScore, 700, 60);

}

Track.prototype.renderWin = function(ctx, canvasSize){

   this.render(ctx, canvasSize);
   ctx.fillStyle = "#FDFEFE";
   ctx.font = "40px 'Press Start 2P'";
   ctx.drawImage(this.img, canvasSize.w/2-80, 240, 100, 100); 
   ctx.fillText("YOU WIN!!", canvasSize.w/2-180, 400);

}