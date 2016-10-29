

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
