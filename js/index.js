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
      setTimeout(resetEverything, 7000 );
      refreshed = true;
    }
    fill(255);
    gameOverTextSize = constrain(gameOverTextSize,0,50);
    textSize(gameOverTextSize);
    textAlign(CENTER);
    if(score == numEnemies){
      text("You Won! Code is: MediumOfRiddles", windowWidth * 0.5, windowHeight * 0.5 + 15);
    }
    else{
      text("Game Over", windowWidth * 0.5, windowHeight * 0.5 + 15);
    }
    gameOverTextSize += 2;
  }
  textSize(20);
  text('Score:' + score, windowWidth - 100, 50);
}
