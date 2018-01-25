function Game() {
  this.start = true;
  this.stop = false;
  this.level = 1;
  this.track = new Track();
  this.jammer = new Jammer(110); // pasamos max speed
  this.blockers = [];
  //this.trackPosition = [0, 1, 2, 3];//aux to control options
}


Game.prototype.startGame = function () {

}

Game.prototype.addBlocker = function (blocker) {
  this.blockers.push(blocker);

}

//case 0:Selecciona una posición aleatoria en el eje Y entre 180px y 490px
//case 1:Selecciona una posición aleatoria en el eje Y menor 30%
//case 2:Selecciona una posición aleatoria en el eje Y entre el 30% y el 70%
//case 3:Selecciona una posición aleatoria en el eje Y mayor que el 70%
Game.prototype.givePositionY = function (pos) {
  var encontrado = false;
  var position;
  while (!encontrado) {

    position = Math.floor((Math.random() * 480)) + 61;
    switch (pos) {

      case 0:
        if (position > 140 && position < 420) {
          encontrado = true;
        }
        break;

      case 1:
        if ((position > 140 && position < 420) && position < 480 * 0.3 + 61) {
          encontrado = true;
        }
        break;

      case 2:
        if ((position > 140 && position < 420) && (position > 480 * 0.3 + 61 && position < 480 * 0.7 + 61)) {
          encontrado = true;
        }
        break;

      case 3:
        if ((position > 140 && position < 420) && (position > 480 * 0.7 + 61)) {
          encontrado = true;
        }
        break;
     default:// genérico aleatorio
        if (position > 140 && position < 420) {
           encontrado = true;
        }
    }
  }

  return position;
}

//determinamos con el nivel el número de elementos que lanzamos (blocqueadoras)
Game.prototype.giveLevel = function () {

  switch (this.level) {

    case 1:
      //generamos 3 elementos en 3 posiciones diferentes(0-3 random position)
      for (var i = 1; i <= 3; i++) {
        var ptLanza = this.givePositionY(i);
        var blocker = new Blocker(ptLanza);
        this.addBlocker(blocker);

      }
      break;
  }

}

Game.prototype.triggerBlockers = function () {
  this.giveLevel();

}

Game.prototype.renderBlockers = function () {

  var speed = 1;
  if (this.level === 2) speed = 3; //ampliar lógica por niveles futuros
  game.blockers.forEach(function (blocker) {
    speed += 1;
    blocker.update(speed);
    blocker.render();

  });

}

Game.prototype.cleanBlockers = function () {
  this.blockers = [];

}

Game.prototype.cleanBlockersByPosition = function (pos) {
  this.blockers.splice(pos, 1);
}

//hay que pasar las blockers
Game.prototype.collisionDetection = function () {
  if (this.blockers.length > 0) {

    this.blockers.forEach(function (blocker) {

      if (this.jammer.x < blocker.x + blocker.width && this.jammer.x + this.jammer.width > blocker.x &&
          this.jammer.y < blocker.y + blocker.heigh && this.jammer.y + this.jammer.heigh > blocker.y &&
          blocker.deathPoint === false ) {

        this.jammer.width = 80 * this.jammer.scale;
        this.jammer.heigh = 70;
        this.jammer.img.src = "images/rd-jammerCaida.png";
        this.jammer.stop();
        this.cleanBlockers();
        this.jammer.points = 0;
        this.track.valueScore = 0;
        if (this.level === 2) {
          this.level = 1;
          this.track.valueJam = 1;
        }

      }

    }.bind(this));

  }

}

Game.prototype.wonPoints = function () {

  if (this.blockers.length > 0) {

    this.blockers.forEach(function (blocker, i) {

      if (this.jammer.x > blocker.x + blocker.width) {
        blocker.img.src = "images/rd-point.png";
        if (!blocker.deathPoint) blocker.time = Date.now();
        blocker.deathPoint = true;
        if (blocker.deathPoint && Date.now() - blocker.time > 500) {
          this.addPointsAndClean(i, canvasSize);
        }
      }

    }.bind(this));

  }
}


Game.prototype.addPointsAndClean = function (pos, canvasSize) {
  this.cleanBlockersByPosition(pos); // SOLO PRUEBA
  this.jammer.points += 1;
  this.track.valueScore = this.jammer.points;

  switch (this.jammer.points) {
    case 30: //score: 30 => you won
      this.jammer.won = true;
      this.cleanBlockers();
      break;
    case 15: //score: 15 => level 2
      this.level = 2;
      this.track.valueJam = 2;
      this.createBlockerByLevel(pos, canvasSize);
      break;
    default: //default => level 1
      this.createBlockerByLevel(pos, canvasSize);

  }

}

Game.prototype.createBlockerByLevel = function (pos, canvasSize) {
  var ptLanza;
  var blocker;

  switch (this.level) {
    case 1:
      //nivel 1: generación aleatoriamente => 0
      ptLanza = this.givePositionY(0);
      blocker = new Blocker(ptLanza);
      this.addBlocker(blocker);
      break;

    case 2:
      //nivel 2: generación en función de la posición del array que ocupa la blocker => (pos +1)
      ptLanza = this.givePositionY(pos + 1);
      blocker = new Blocker(ptLanza);
      blocker.update(2); //add speed
      this.addBlocker(blocker);
      break;
  }

}