var Bullet = function(x, y, up) {
    this.pos = createVector(x, y);

    //Creates acceleration upwards or downwards, if up
    this.acc = createVector(0, BulletForce * (up ? -1 : +1));

    this.draw = function() {
        //Draw Bullet at position TODO
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
        // TODO

        // if bullet leaves the screen delete it, otherwise amount of bullets slowdowns the game
        if (this.pos.y < 0 || this.pos.y > canvas.height) {
            gameObjects.splice(gameObjects.indexOf(this), 1);
        }

        // TODO collision
    }
}
