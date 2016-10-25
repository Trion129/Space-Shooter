var SpaceShip = function (x = 0, y = 0) {
  //default parameters are to put the spaceShip in the center
  //Variables here
  this.pos = createVector(x, y); //Vector for holding position
  this.acc = createVector(0, 0); //No acceleration by default
  this.img = loadImage("images/spaceship.png");
  //Functions here
  this.update = function () {
    this.pos.add(this.acc);
  }

  this.move = function (moveCode) {
    switch (moveCode) {
      //TODO make decisions here and apply Force towards that side in acc
      // this.acc.add(forceVector);
    }
  }

  //Generates a bullet with a force,  upwards
  this.shoot = function () {
    // TODO
  }

  //
  this.draw = function () {
    image(this.img, mouseX - 25, mouseY - 25, 50, 50);
  }
}


//Generate SpaceShip with constructor, give the x and y
function placeSpaceShip() {
  const spaceShip = new SpaceShip();

  return spaceShip;
}
