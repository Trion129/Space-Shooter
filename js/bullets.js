var BulletForce = 5;

var Bullet = function(x, y, up) {
    this.pos = createVector(x, y);

    //Creates acceleration upwards or downwards, if up
    this.acc = createVector(0, BulletForce * (up
        ? -1
        : + 1));

    this.addAcc = function() {
        this.pos.add(this.acc);
    }

    this.draw = function() {
        //Draw Bullet at position TODO
        rect(this.pos.x, this.pos.y, 3, 7);
    }

    this.update = function() {
        this.addAcc();
        this.detectCollision();
    }

    this.detectCollision = function() {
        // Go through all game objects and check if bullet's x and y coordinates
        // are same any of the object, you can assume hitbox to be a rectangle
        // even if the enemies are looking funky
        // TODO
    }
}
