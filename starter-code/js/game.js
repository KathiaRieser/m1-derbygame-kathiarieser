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

//determinamos con el nivel el número de elementos que lanzamos (blocqueadoras)
Game.prototype.giveLevel = function(level, canvasSize){

        switch(level){
           
          case 1:

            for(var i=1; i<= 1; i++){   //3
                var ptLanza = 60 * i;//CUIDADO!!             
                var blocker = new Blocker(canvasSize, ptLanza);
                this.addBlocker(blocker);

            }
          break;
        }

}

Game.prototype.triggerBlockers = function(evel, canvasSize){


          this.giveLevel(evel,canvasSize);

}

Game.prototype.renderBlockers = function(ctx){

  
  game.blockers.forEach(function(blocker){

    //console.log(blocker);
    blocker.update();
    //console.log(blocker);
    //console.log(ctx);
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
  //Lanzamos otra
  var ptLanza = 100;
  var blocker = new Blocker(canvasSize, ptLanza);
  this.addBlocker(blocker);
}




