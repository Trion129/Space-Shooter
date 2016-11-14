function setup(){
  canvas = createCanvas(windowWidth, windowHeight-10);

  setupControls();
  placeEnemies();
  spaceship = placeSpaceShip();
  gameObjects.push(spaceship);
}

function draw(){
  background(0);
  if(!gameOver){
    updatePositions();
    drawObjects();
  }
  else{
    if(!refreshed){
      setTimeout(resetEverything, 3000 );
      refreshed = true;
    }
    fill(255);
    gameOverTextSize = constrain(gameOverTextSize,0,50);
    textSize(gameOverTextSize);
    rectMode(CENTER);
    text("Game Over", windowWidth*(1/4 + 1/8), windowHeight/2);
    if(score == numEnemies){
      text("You Won!", windowWidth*(1/4 + 1/7), windowHeight/2 + 100);
    }
    gameOverTextSize += 2;
  }
  textSize(20);
  text('Score:' + score, windowWidth - 100, 50);
}
