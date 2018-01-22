
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var canvasSize = {w:canvas.width, h: canvas.height};

  //var game = new Game();
  var track = new Track();
  var jammer = new Jammer();
  var blocker = new Blocker(canvasSize);


  function update(){
    ctx.clearRect(0,0, canvasSize.w, canvasSize.h);
    track.render(ctx, canvasSize);
    jammer.render(ctx);
    blocker.update();
    blocker.render(ctx);
    requestAnimationFrame(update);

   }

  //update();
  requestAnimationFrame(update);

   $(document).keydown(function (e) {

    //console.log(e.keyCode);
    ctx.clearRect(0,0, canvasSize.w, canvasSize.h);
    track.render(ctx, canvasSize);
    jammer.moveJammer(e.keyCode);
    jammer.render(ctx);

   });




