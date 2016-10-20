var SpaceShip = function(x, y){
  //Variables here
  this.pos = createVector(x, y); //Vector for holding position
  this.acc = createVector(0, 0); //No acceleration by default

  //Functions here
  this.update = function(){
    this.pos.add(this.acc);
  }

  this.move = function(moveCode){
    switch(moveCode){
      //TODO make decisions here and apply Force towards that side in acc
      // this.acc.add(forceVector);
    }
  }

  //Generates a bullet with a force,  upwards
  this.shoot = function(){
    // TODO
  }

  //
  this.draw = function(){
    // TODO
  }
}


//Generate SpaceShip with constructor, give the x and y
function placeSpaceShip(){

}
