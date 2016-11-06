//default parameters are to put the spaceShip in the center
var SpaceShip = function(x, y) {
    x = x || width / 2;
    y = y || height / 2;
    //Variables here
    this.pos = createVector(x, y); //Vector for holding position
    this.vel = createVector(0, 0); // Vel changes position
    this.img = loadImage("images/spaceship.png");
    this.acc = createVector(0, 0);

    //Functions here
    this.update = function update() {
        this.pos.add(this.acc);
        if (this.pos.x < 0) {
            this.pos.x = 0.1;
            this.acc.x = 0;
        } else if (this.pos.x > canvas.width - this.img.width) {
            this.pos.x = canvas.width - this.img.width - 0.1;
            this.acc.x = 0;
        } else {
            this.pos.add(this.acc);
        }
    }

    this.move = function(moveCode) {
        var forceVector = createVector(0, 0);
        switch (moveCode) {
                //TODO make decisions here and apply Force towards that side in acc
                // acc.add(forceVector);
                // case DOWN_ARROW:
                //   forceVector.set(0, 1);
                //   break;
                // case UP_ARROW:
                //   forceVector.set(0, -1);
                //   break;
            case LEFT_ARROW:
                console.log(this.acc.x);
                if (this.acc.x > 0) {
                    this.acc.x = 0;
                    this.acc.x += -2;
                } else if (this.acc.x > -10) {
                    this.acc.x += -2;
                }
                break;
            case RIGHT_ARROW:
                console.log(this.acc.x);
                if (this.acc.x < 0) {
                    this.acc.x = 0;
                    this.acc.x += 2;
                } else if (this.acc.x < 10) {
                    this.acc.x += 2;
                }
                break;
            case DOWN_ARROW:
                this.acc.x = 0;
                break;

        }
    }

    //Generates a bullet with a force,  upwards
    this.shoot = function() {
        var bullet = new Bullet(this.pos.x + this.img.width / 2, this.pos.y, true);
        gameObjects.push(bullet);
    }

    this.draw = function() {
        image(this.img, this.pos.x, this.pos.y, 100, 65);
    }
}

//Generate SpaceShip with constructor, give the x and y
function placeSpaceShip() {
    var spaceShip = new SpaceShip(canvas.width / 2, canvas.height - canvas.height / 5);
    return spaceShip;
}
