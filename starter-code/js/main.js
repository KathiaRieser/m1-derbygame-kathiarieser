var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvasSize = {
  w: canvas.width,
  h: canvas.height
};

var now = Date.now();
var delta = 0;
var game = new Game();

game.triggerBlockers(game.level, canvasSize);

function update() {
  then = now;
  now = Date.now();
  delta = now - then;
  game.jammer.delta = delta;

  ctx.clearRect(0, 0, canvasSize.w, canvasSize.h);
  game.track.render(ctx, canvasSize);
  game.collisionDetection(ctx);
  game.wonPoints(ctx, canvasSize);
  game.jammer.render(ctx);
  game.renderBlockers(ctx);
  requestAnimationFrame(update);

}
requestAnimationFrame(update);

$(document).keydown(function (e) {
  game.jammer.moveJammer(e.keyCode);

});

$(document).keyup(function (e) {
  game.jammer.stop();

});