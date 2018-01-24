function Track(){

  this.textScore = "Score: ";
  this.textJam = "Jam: ";
  this.valueJam = 1;
  this.valueScore = 0;

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
  ctx.font = "25px 'undertalefont'";
  ctx.fillText(this.textJam, 260, 60);
  ctx.fillText(this.valueJam, 310, 60);

  ctx.fillText(this.textScore, 630, 60);
  ctx.fillText(this.valueScore, 700, 60);

}