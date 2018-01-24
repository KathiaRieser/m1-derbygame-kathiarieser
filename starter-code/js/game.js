function Game() {

  this.start = true;
  this.stop = false;
  this.level = 1;
  this.track = new Track();
  this.jammer = new Jammer(110); // pasamos max speed
  this.blockers = [];
}


Game.prototype.startGame = function () {


}

Game.prototype.addBlocker = function (blocker) {
  this.blockers.push(blocker);

}

// Slecciona una posición aleatoria en el eje Y entre 180px y 490px
Game.prototype.givePositionY = function (pos) {

  var encontrado = false;
  var position;
  while (!encontrado) {

    position = Math.floor((Math.random() * 480)) + 61;
    //Hay que tener en cuenta la altura de las bloqueadoras 60px - 5px de la línea
    // 180 - 55   > posición < 480 -60
    /*if (position > 125 && position < 420) {

      encontrado = true;
    }*/
    switch(pos){
      
      case 0:
        
        if (position > 140 && position < 420) {
           encontrado = true;
         }
        
        continue;
        
        case 1:
        
        if ((position > 140 && position < 420) &&  position< 480*0.5+61) {
           encontrado = true;
         }
        
        continue;
        
        case 2:
        
        if ((position > 140 && position < 420) &&  (position>480*0.5+61)) {
           encontrado = true;
         }
        
        continue;
      
    }



  }

  return position;

}

//determinamos con el nivel el número de elementos que lanzamos (blocqueadoras)
Game.prototype.giveLevel = function (level, canvasSize) {

  switch (level) {

    case 1:

      for (var i = 1; i <= 3; i++) { //3 
        var ptLanza = this.givePositionY(0);
        var blocker = new Blocker(canvasSize, ptLanza);
        this.addBlocker(blocker);

      }
      break;
  }

}

Game.prototype.triggerBlockers = function (evel, canvasSize) {

  this.giveLevel(evel, canvasSize);

}

Game.prototype.renderBlockers = function (ctx) {

  var speed = 1;
  if(this.level === 2) speed = 3;
  game.blockers.forEach(function (blocker) {
    speed += 1;
    blocker.update(speed);
    blocker.render(ctx);

  });

}

Game.prototype.cleanBlockers = function () {

  this.blockers = [];

}

Game.prototype.cleanBlockersByPosition = function (x) {

  this.blockers.splice(x, 1);
}

//hay que pasar las blockers
Game.prototype.collisionDetection = function () {

  if (this.blockers.length > 0) {

    this.blockers.forEach(function (blocker) {

      if (this.jammer.x < blocker.x + blocker.width && this.jammer.x + this.jammer.width > blocker.x &&
        this.jammer.y < blocker.y + blocker.heigh && this.jammer.y + this.jammer.heigh > blocker.y) {

        this.jammer.width = 80 * this.jammer.scale;
        this.jammer.heigh = 70;
        this.jammer.img.src = "images/rd-jammerCaida.png";
        this.jammer.stop();
        this.cleanBlockers();
        this.jammer.points = 0;
        this.track.valueScore = 0;
        if(this.level === 2){
          this.level = 1;
          this.track.valueJam = 1;
        }

      }

    }.bind(this));

  }

}

Game.prototype.wonPoints = function (ctx, canvasSize) {

  if (this.blockers.length > 0) {

    this.blockers.forEach(function (blocker, i) {
      if (this.jammer.x > blocker.x + blocker.width) {

        blocker.img.src = "images/rd-point.png";
        if (!blocker.deathPoint) blocker.time = Date.now();

        blocker.deathPoint = true;
        if (blocker.deathPoint && Date.now() - blocker.time > 500) {
          this.sumaPuntosYLimpia(i, canvasSize);
        }

      }
    }.bind(this));
  }
}


Game.prototype.sumaPuntosYLimpia = function (x, canvasSize) {

  this.cleanBlockersByPosition(x); // SOLO PRUEBA
  this.jammer.points += 1;

  //score === 30 cambiamos de nivel
  if(this.jammer.points === 30){

      this.jammer.won = true;
      this.track.valueScore = this.jammer.points;
      this.cleanBlockers();

  }else{

  //score === 15 cambiamos de nivel
  if(this.jammer.points === 15){
    this.level = 2;
    this.track.valueJam = 2;
  } 
  this.track.valueScore = this.jammer.points;
  //Lanzamos blockers tras putuar según el nivel
  if(this.level === 1) {
    var ptLanza = this.givePositionY(0);
    var blocker = new Blocker(canvasSize, ptLanza);
    this.addBlocker(blocker);

  }else{
  
    var ptLanza = this.givePositionY(0);
    var blocker = new Blocker(canvasSize, ptLanza);
    blocker.update(2);
    this.addBlocker(blocker);
  }  

  }
 

  
}