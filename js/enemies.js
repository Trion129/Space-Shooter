var Enemy = function(x, y){
 /*
   Given the x and y coordinates creates an alien thats
   moving left to right and viceversa.
 */
  this.pos = createVector(x, y) //Vector for holding position
  this.enemyWidth = 35; // the width of the alien
  this.xVel = createVector(2, 0); // horizontal velocity
  this.yVel = createVector(0, 15); // vertical velocity
  this.chanceOfShooting = 3; // chance factor that the alien is going to shoot
  this.dead = false; // flag for checking if the alien has been hit
  this.incrementNumberOfEnemies();

  var sprite = loadImage("images/invader.jpg");

  /*
    Moves the alien down by yVel and changes his direction
  */
  this.moveDown = function() {
    this.xVel.mult(-1);
    this.pos.add(this.yVel);
  }

  /*
    Updates the position of the alien if it's not hit
  */
  this.update = function(){
    if(this.dead) return;

    this.pos.add(this.xVel);
    if (this.pos.x  > width - this.enemyWidth || this.pos.x < 0) {
      this.setGlobalEdgeToTrue();
    }
    this.shoot();
    this.checkIfEdge();

    return this;
  }

  /*
    Generates a bullet with a force, downwards based on
    a random value.
  */
  this.shoot = function(){
    var a = Math.round(Math.random() * 1000);
    if (a < this.chanceOfShooting) {
      var bullet = new Bullet(this.pos.x + this.enemyWidth/2, this.pos.y + this.enemyWidth, false);
      gameObjects.push(bullet);
      console.log("Shoot!");
    }
  }

  /*
    Draws the alien on the canvas at the current position
  */
  this.draw = function() {
      sprite.resize(this.enemyWidth, 0);
      image(sprite, this.pos.x, this.pos.y);

      return this;
    }
}

//Shared variables by all objects
Enemy.prototype.edge = false;
Enemy.prototype.numberOfEnemies = 0;

/*
  Switches the edge value to true.
*/
Enemy.prototype.setGlobalEdgeToTrue = function() {
    Enemy.prototype.edge = true;
}

/*
  Increment the total number of enemies by one
  upon object creation.
*/
Enemy.prototype.incrementNumberOfEnemies = function() {
  Enemy.numberOfEnemiesTot = Enemy.prototype.numberOfEnemies += 1;
}

/*
  Check if any of the enemies has reaches the edge, if so
  changes their direction.
*/
Enemy.prototype.checkIfEdge = function()  {
    if (this.edge) {
      this.moveDown();
      Enemy.prototype.numberOfEnemies -= 1;
      if(Enemy.prototype.numberOfEnemies === 0) {
        Enemy.prototype.edge = false;
        Enemy.prototype.edge = false;
        Enemy.prototype.numberOfEnemies = Enemy.numberOfEnemiesTot;
      }
    }
};

//Generate Enemies with constructor, give the x and y
function placeEnemies(){

  var e = 35;
  var x = e / 2;
  var numEnemies = Math.floor(width / (e * 2));

  console.log(numEnemies);
	for( i=0; i < numEnemies; i++){

    gameObjects.push(new Enemy(x,e));
    x += e*2;
	}

}
