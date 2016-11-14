var gameObjects = [];
var spaceship;
var canvas;
var BulletForce = 5;
var gameOver = false;
var gameOverTextSize = 0;
var score = 0;
var numEnemies = 0;
var refreshed = false;

function resetEverything(){
  gameObjects = [];
  spaceship = undefined;
  BulletForce = 5;
  gameOver = false;
  gameOverTextSize = 0;
  score = 0;
  numEnemies = 0;
  refreshed = false;
  Enemy.prototype.edge = false;
  Enemy.prototype.numberOfEnemies = 0;
  
  placeEnemies();
  spaceship = placeSpaceShip();
  gameObjects.push(spaceship);
}
