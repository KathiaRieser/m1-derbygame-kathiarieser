function Game(){

  this.start = true;
  this.stop = false;
  this.level = 1;
  this.track = new Track();
  this.jammer = new Jammer();
  this.blockers = [];


}


Game.prototype.startGame = function(){


}

Game.prototype.addBlocker = function(blocker){

  this.blockers.push(blocker);

}

// Slecciona una posición aleatoria en el eje Y entre 180px y 490px
Game.prototype.givePositionY = function(){

  var encontrado = false;
  var position; 
  while(!encontrado){
    
    position = Math.floor((Math.random()*480)) + 61;
    //Hay que tener en cuenta la altura de las bloqueadoras 60px - 5px de la línea
    // 180 - 55   > posición < 480 -60
    if(position > 125 && position < 420){
        
        encontrado = true;
    }
  }
  
  return position;

}

//determinamos con el nivel el número de elementos que lanzamos (blocqueadoras)
Game.prototype.giveLevel = function(level, canvasSize){

        switch(level){
           
          case 1:

            for(var i=1; i<= 3; i++){   //3
                //var ptLanza = 70 * i;//CUIDADO!!  
                var ptLanza = this.givePositionY();           
                var blocker = new Blocker(canvasSize,ptLanza);
                this.addBlocker(blocker);

            }
          break;
        }

}

Game.prototype.triggerBlockers = function(evel, canvasSize){

          this.giveLevel(evel,canvasSize);

}

Game.prototype.renderBlockers = function(ctx){

  var speed = 1;
  game.blockers.forEach(function(blocker){

    speed += 1;
    blocker.update(speed);
    blocker.render(ctx);

  });

}

Game.prototype.cleanBlockers = function(){

   this.blockers = [];

}

Game.prototype.cleanBlockersByPosition = function(x){

   this.blockers.splice(x,1);
}

//hay que pasar las blockers
Game.prototype.collisionDetection = function(){

      if(this.blockers.length > 0){

        var blocker = this.blockers[0];
        if(this.jammer.x < blocker.x + blocker.width && this.jammer.x + this.jammer.width > blocker.x &&
           this.jammer.y < blocker.y + blocker.heigh && this.jammer.y + this.jammer.heigh > blocker.y ){
  
              this.jammer.width = 80 * this.jammer.scale;
              this.jammer.heigh = 70;
              this.jammer.img.src = "images/rd-jammerCaida.png";
              this.cleanBlockers();
              this.track.valueScore = 0;
           }  

      }
     
}

Game.prototype.wonPoints = function(ctx,canvasSize){

      if(this.blockers.length > 0){
        var blocker = this.blockers[0];
        if(this.jammer.x > blocker.x + blocker.width){

             blocker.img.src = "images/rd-point.png";
             if(!blocker.deathPoint) blocker.time = Date.now();

             blocker.deathPoint = true;
             if(blocker.deathPoint && Date.now() - blocker.time > 500){
              this.sumaPuntosYLimpia(0,canvasSize);
             }
            
            
          }
      }
}


Game.prototype.sumaPuntosYLimpia = function(x,canvasSize){

  this.cleanBlockersByPosition(x);// SOLO PRUEBA
  this.jammer.points += 1;
  this.track.valueScore = this.jammer.points;
  //Lanzamos otra
  var ptLanza = this.givePositionY();//100;
  var blocker = new Blocker(canvasSize,ptLanza);
  this.addBlocker(blocker);
}




