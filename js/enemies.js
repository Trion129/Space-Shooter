var Enemy = function(x, y){
 /* Given the x and y coordinates creates an alien thats
    moving left to right and viceversa.
 */

  this.pos = createVector(x, y) //Vector for holding position
  this.enemyWidth = 35; // the width of the alien
  this.xVel = createVector(2, 0); // horizontal velocity
  this.yVel = createVector(0, 15); // vertical velocity
  this.chaceOfShooting = 5; // chance factor that the alien is going to shoot
  this.dead = false; // flag for checking if the alien has been hit


  var sprite = loadImage("invader1.png");

  /*Shows the alien on the canvas*/
  this.show = function() {
      sprite.resize(this.enemyWidth, 0);
      image(sprite, this.pos.x, this.pos.y);
<<<<<<< HEAD
  }

  /*Moves the alien down by yVel and changes his direction*/
  this.moveDown = function() {
    this.xVel.mult(-1);
    this.pos.add(this.yVel);
  }

  /*Updates the position of the alien if it's not hit*/
  this.update = function(){
    if(this.dead) return;

=======
  }

  /*Moves the alien down by yVel and changes his direction*/
  this.moveDown = function() {
    this.xVel.mult(-1);
    this.pos.add(this.yVel);
  }

  /*Updates the position of the alien if it's not hit*/
  this.update = function(){
    if(this.dead) return;

>>>>>>> fijeko/master
    this.pos.add(this.xVel);
    if (this.pos.x  > width - this.enemyWidth || this.pos.x  < 0) {
      this.moveDown();
    }
    this.shoot();
  }
  /*Generates a bullet with a force, downwards based on
    a random value. */
  this.shoot = function(){
    var a = Math.round(Math.random() * 1000);
    console.log(a);
    if (a < this.chaceOfShooting) {
      //var bullet = new Bullet(-1);
      console.log("Shoot!");
    }
  }

  //Draws the enemy at current position
  this.draw = function(){
    // TODO
  }
}


//Generate Enemies with constructor, give the x and y
function placeEnemies(){
  var numEnemies = 6;
	for( i=0; i < numEnemies; i++){
		var p = tmpDim();
		console.log('new enemy:',p);
		gameObjects.push(new Enemy(p[0], p[1]));
	}

	function tmpDim(){
		var dimX = 20;
		var dimY = 20;
		var x;
		x = rnd( width - dimX ) + dimX/2 ;
		return [x,dimY];
	}

	function rnd(x){
		return Math.floor(Math.random() * 1000 % x)
	};
}
