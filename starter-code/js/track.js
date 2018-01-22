function Track(){

}

Track.prototype.render = function(ctx, canvasSize){

  ctx.fillStyle = "#943126";
  ctx.fillRect(0, 0, canvasSize.w, canvasSize.h);
  ctx.fillStyle = "#FDFEFE";
  ctx.fillRect(0, 175, canvasSize.w, 5); //x,y
  ctx.fillStyle = "#FDFEFE";
  ctx.fillRect(0, 480, canvasSize.w, 5); //x,y

}