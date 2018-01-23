
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var canvasSize = {w:canvas.width, h: canvas.height};

  var game = new Game();
  game.triggerBlockers(game.level,canvasSize);
  //var blocker = new Blocker(canvasSize,60);


  function update(){
    ctx.clearRect(0,0, canvasSize.w, canvasSize.h);
    game.track.render(ctx, canvasSize);
    game.jammer.render(ctx);
    game.renderBlockers(ctx);
    game.collisionDetection(ctx);
    game.wonPoints(ctx, canvasSize);
    //blocker.update(); 
    //blocker.render(ctx);

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




