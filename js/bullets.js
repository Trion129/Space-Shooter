var Bullet = function(x, y, up) {
    this.pos = createVector(x, y);
    this.directionUpward = up; // for identify who is shooting
    this.width = 3;
    this.height = 10;

    //Creates acceleration upwards or downwards, if up
    this.acc = createVector(0, BulletForce * (up
        ? -1
        : + 1));

    this.draw = function() {
        fill(255, 204, 100);
        rect(this.pos.x, this.pos.y, this.width, this.height);
    }

    this.update = function() {
        this.pos.add(this.acc);
        this.outOfCanvas();
        this.detectCollision();
    }

    this.outOfCanvas = function() {
        // if bullet leaves the screen delete it, otherwise amount of bullets slowdowns the game
        if (this.pos.y < 0 || this.pos.y > canvas.height) {
            gameObjects.splice(gameObjects.indexOf(this), 1);
        }
    }

    this.distanceToGameObject = function(obj) {
        var d;
        if (obj instanceof Enemy) {
            d = dist(this.pos.x + this.width / 2, this.pos.y + this.height / 2, obj.pos.x + obj.enemyWidth / 2, obj.pos.y + obj.enemyWidth / 2);
            if (d < this.height / 2 + obj.enemyWidth / 2) {
                return true;
            } else {
                return false;
            }
        } else if (obj instanceof SpaceShip) {
            d = dist(this.pos.x + this.width / 2, this.pos.y + this.height / 2, obj.pos.x + obj.img.width / 2, obj.pos.y + obj.img.height / 2);
            if (d < this.height / 2 + obj.img.height / 2) {
                return true;
            } else {
                return false;
            }
        } else if (obj instanceof Bullet) {
            d = dist(this.pos.x + this.width / 2, this.pos.y + this.height / 2, obj.pos.x + obj.width / 2, obj.pos.y + obj.height / 2);
            if (d < this.height) {
                return true;
            } else {
                return false;
            }
        }
    };

    this.detectCollision = function() {
        // Go through all game objects and check if bullet's x and y coordinates
        // are same any of the object, you can assume hitbox to be a rectangle
        // even if the enemies are looking funky

        for (var i = 0; i < gameObjects.length; i++) {
            // detect Enemy
            if (gameObjects[i]instanceof Enemy === true && !gameObjects[i].dead && this.directionUpward === true) {
                if (this.pos.x + this.width / 2 >= gameObjects[i].pos.x && this.pos.x + this.width / 2 <= gameObjects[i].pos.x + gameObjects[i].enemyWidth) {
                    if (this.distanceToGameObject(gameObjects[i])) {
                        gameObjects[i].dead = true;
                        gameObjects[i].chanceOfShooting = 0; // TODO delete this line in the future
                        gameObjects[i].yVel = createVector(0, -10); // TODO delete this line in the future
                        gameObjects.splice(gameObjects.indexOf(this), 1); //delete bullet from game :)
                        score++;
                        if(score == numEnemies){
                          gameOver = true;
                        }
                    }
                }
            } else
            // detect SpaceShip
            if (gameObjects[i]instanceof SpaceShip === true && this.directionUpward === false) {
                if (this.pos.x + this.width / 2 >= gameObjects[i].pos.x && this.pos.x + this.width / 2 <= gameObjects[i].pos.x + gameObjects[i].img.width) {
                    if (this.distanceToGameObject(gameObjects[i])) {
                        gameOver = true;
                    }
                }
            } else
            // detect Bullet
            if (gameObjects.indexOf(this) !== i) {
                if (gameObjects[i]instanceof Bullet === true && gameObjects[i].directionUpward === false && this.directionUpward === true) {
                    if (this.pos.x + this.width / 2 >= gameObjects[i].pos.x && this.pos.x + this.width / 2 <= gameObjects[i].pos.x + gameObjects[i].width) {
                        if (this.distanceToGameObject(gameObjects[i])) {
                            gameObjects.splice(i, 1); //delete hited bullet from game :)
                            gameObjects.splice(gameObjects.indexOf(this), 1); //delete bullet from game :)
                        }
                    }
                }
            }
        } // 'for' loop end

    }
}
