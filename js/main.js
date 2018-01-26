
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvasSize = {
  w: canvas.width,
  h: canvas.height
};

var now;
var delta;
var game ;
var request;
var pointSound = new Audio("sounds/rd-addPoint.wav");
pointSound.volume = 0.2;

$('#start-button').on('click', function (){

now = Date.now();
delta = 0;
//Creating array of 3 
game = new Game();
game.triggerBlockers();
window.cancelAnimationFrame(request);
request = requestAnimationFrame(update);

});
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

  request = requestAnimationFrame(update);

}

//request = requestAnimationFrame(update);




$(document).keydown(function (e) {
  game.jammer.moveJammer(e.keyCode);

});

$(document).keyup(function (e) {
  game.jammer.stop();
});