let spaceship;
let canvas;

function setup(){
  canvas = createCanvas(document.body.clientWidth, 500);

  setupControls(); //TODO
  placeEnemies(); // TODO
  spaceship = placeSpaceShip(); //TODO
}

function draw(){
  background(0);
  updatePositions(); //TODO
  drawObjects(); //TODO
}
