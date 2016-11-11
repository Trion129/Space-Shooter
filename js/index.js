function setup(){
  canvas = createCanvas(windowWidth, windowHeight-10);

  setupControls(); //TODO
  placeEnemies(); // TODO
  spaceship = placeSpaceShip(); //TODO
  gameObjects.push(spaceship);
}

function draw(){
  background(0);
  updatePositions(); //TODO
  drawObjects(); //TODO
}

// for testing: mouse click on canvas stop and resume game

function mousePressed(){ loop(); }
function mouseReleased(){ noLoop(); }
