

//default parameters are to put the spaceShip in the center
var SpaceShip = function (x, y) {
  x = x || width / 2;
  y = y || height / 2;
  //Variables here
  this.pos = createVector(x, y); //Vector for holding position
  this.vel = createVector(0, 0); // Vel changes position
  this.img = loadImage("images/spaceship.png");
  var acc = createVector(0, 0);

  //Functions here
  this.update = function update() {
    this.vel.add(acc)
    this.pos.add(this.vel);
    acc.set(0, 0);
  }

  function applyForce(force) {
    acc.add(force);
  }

  this.move = function (moveCode) {
    var forceVector = createVector(0, 0);
    switch (moveCode) {
      //TODO make decisions here and apply Force towards that side in acc
      // acc.add(forceVector);
      case DOWN_ARROW:
        forceVector.set(0, 1);
        break;
      case UP_ARROW:
        forceVector.set(0, -1);
        break;
      case LEFT_ARROW:
        forceVector.set(-1, 0);
        break;
      case RIGHT_ARROW:
        forceVector.set(1, 0);
        break;
    }
    applyForce(forceVector);
  }



  //Generates a bullet with a force,  upwards
  this.shoot = function () {
    var bullet = new Bullet(this.pos.x, this.pos.y, true);
  }

  //
  this.draw = function () {
    image(this.img, this.pos.x, this.pos.y, 100, 65);
  }
}


//Generate SpaceShip with constructor, give the x and y
function placeSpaceShip() {
  var spaceShip = new SpaceShip(canvas.width / 2, canvas.height - canvas.height / 5);

  return spaceShip;
}
