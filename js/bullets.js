var Bullet = function(x, y, up) {
    this.pos = createVector(x, y);

    //Creates acceleration upwards or downwards, if up
    this.acc = createVector(0, BulletForce * (up ? -1 : +1));

    this.draw = function() {
        rect(this.pos.x, this.pos.y, 3, 7);
    }

    this.update = function() {
        this.pos.add(this.acc);
        this.detectCollision();
    }

    this.detectCollision = function() {
        // Go through all game objects and check if bullet's x and y coordinates
        // are same any of the object, you can assume hitbox to be a rectangle
        // even if the enemies are looking funky

        // if bullet leaves the screen delete it, otherwise amount of bullets slowdowns the game
        if (this.pos.y < 0 || this.pos.y > canvas.height) {
            gameObjects.splice(gameObjects.indexOf(this), 1);
        }

        // detect collision with spaceship
        if (this.pos.x >= spaceship.pos.x && this.pos.x <= spaceship.pos.x + spaceship.img.width) {
            if (this.pos.y === spaceship.pos.y) {
                // TODO END OF THE GAME, AND restart ?
                console.log('HIT spaceship - GAME OVER'); // TODO delete this line in the future
            }
        }

        // detect collision with enemies
        for (var i = 0; i < gameObjects.length; i++) {
            if (gameObjects[i]instanceof Bullet === false) {
                if (this.pos.y === gameObjects[i].pos.y) {
                    if (this.pos.x >= gameObjects[i].pos.x && this.pos.x <= gameObjects[i].pos.x + 35) {

                        console.log('HIT ALIEN'); // TODO delete this line in the future
                        // gameObjects[i].dead = true;
                        gameObjects[i].chanceOfShooting = 0;
                        gameObjects[i].yVel = createVector(0, -50);
                        // gameObjects.splice(i, 1); //delete hited alien from game
                    }
                }
            }
        }
    }
}
