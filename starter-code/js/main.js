
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var canvasSize = {w:canvas.width, h: canvas.height};

  var game = new Game();
  game.triggerBlockers(game.level,canvasSize);



  function update(){
    ctx.clearRect(0,0, canvasSize.w, canvasSize.h);
    game.track.render(ctx, canvasSize);
    game.jammer.render(ctx);
    //Modificar la lógica
    game.renderBlockers(ctx);
    game.collisionDetection(ctx);
    game.wonPoints(ctx, canvasSize);
    requestAnimationFrame(update);

   }

  //update();
  requestAnimationFrame(update);

   $(document).keydown(function (e) {

    ctx.clearRect(0,0, canvasSize.w, canvasSize.h);
    game.track.render(ctx, canvasSize);
    game.jammer.moveJammer(e.keyCode);
    game.jammer.render(ctx);

   });




