

/*
** Bind Keys and events to the spaceShip's controllers
** e.g. if someone presses space, create a bullet object
*/
function setupControls() {
  $(document).keydown(function (e) {
    if (isMovement(e.which)) {
      spaceship.move(e.which);
    }
    if (isShoot(e.which)) {
      spaceship.shoot();
    }
  });

  function isMovement(code) {
    return code >= 37 && code <= 40;
  }

  function isShoot(code) {
    return code === 32;
  }
}


//Call update functions of all game objects
function updatePositions() {
  gameObjects.forEach(function (e) { o.update(); });
}


//Call draw functions of all game objects
function drawObjects() {
  gameObjects.forEach(function (e) { o.draw(); });
}
