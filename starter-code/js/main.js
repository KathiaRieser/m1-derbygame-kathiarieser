var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvasSize = {
  w: canvas.width,
  h: canvas.height
};

var now = Date.now();
var delta = 0;
var game = new Game();

//Creating array of 3
game.triggerBlockers();

function update() {
  then = now;
  now = Date.now();
  delta = now - then;
  game.jammer.delta = delta;

  ctx.clearRect(0, 0, canvasSize.w, canvasSize.h);
  if (game.jammer.won) {
    game.track.renderWin();
  } else {
    game.track.render();
    game.collisionDetection();
    game.wonPoints();
    game.jammer.render();
    game.renderBlockers();
  }

  requestAnimationFrame(update);

}
requestAnimationFrame(update);

$(document).keydown(function (e) {
  game.jammer.moveJammer(e.keyCode);

});

$(document).keyup(function (e) {
  game.jammer.stop();

});