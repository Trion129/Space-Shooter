let spaceship;
let canvas;

function setup(){
  canvas = createCanvas(800,800);

  setupControls(); //TODO
  placeEnemies(); // TODO
  spaceship = placeSpaceShip(); //TODO
}

function draw(){
  background(0);
  updatePositions(); //TODO
  drawObjects(); //TODO
}
