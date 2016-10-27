//map to make key bindings more understandable
const moveCodes = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
}

var SpaceShip = function (x = 0, y = 0) {
  //default parameters are to put the spaceShip in the center
  //Variables here
  this.pos = createVector(x, y); //Vector for holding position
  this.vel = createVector(0, 0); // Vel changes position
  this.img = loadImage("images/spaceship.png");
  //Functions here
  this.update = function () {
    this.acc = createVector(0, 0); //No acceleration by default
    this.acc.mult(0.1); // Gains acceleration in multiples of 0.1
    this.vel.add(this.acc)
    this.pos.add(this.vel);
  }

  this.move = function (moveCode) {
    switch (moveCode) {
      //TODO make decisions here and apply Force towards that side in acc
      // this.acc.add(forceVector);
      case moveCodes.DOWN:
        this.moveDown();
        break;
      case moveCodes.UP:
        this.moveUp();
        break;
      case moveCodes.LEFT:
        this.moveLeft();
        break;
      case moveCodes.RIGHT:
        this.moveRight();
        break;
    }
  }

  this.moveDown = function () {
    this.pos.y++;
    this.draw();
  }

  this.moveUp = function(){
    this.pos.y--;
    this.draw();
  }

  this.moveLeft = function () {
    this.pos.x--;
    this.draw();
  }

  this.moveRight = function () {
    this.pos.x++;
    this.draw();
  }

  //Generates a bullet with a force,  upwards
  this.shoot = function () {
    // TODO
  }

  //
  this.draw = function () {
    image(this.img, this.pos.x, this.pos.y, 50, 50);
  }
}


//Generate SpaceShip with constructor, give the x and y
function placeSpaceShip() {
  const spaceShip = new SpaceShip(canvas.width/2, canvas.height-canvas.height/5);

  return spaceShip;
}
