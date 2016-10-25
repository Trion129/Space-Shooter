

/*
** Bind Keys and events to the spaceShip's controllers
** e.g. if someone presses space, create a bullet object
*/
function setupControls() {
  $(document).keydown(({which:code}) => {
    if (isMovement(code)) {
      spaceship.move(code);
    }
    if (isShoot(code)){
      spaceship.shoot();
    }
  });

  function isMovement(code){
    return code >=37 && code <= 40;
  }

  function isShoot(){
    return true;
  }
}


//Call update functions of all game objects
function updatePositions() {
  //TODO
}


//Call draw functions of all game objects
function drawObjects() {
  spaceship.draw();
}
