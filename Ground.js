class Ground {

    constructor() {

        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(400, 650, 400, 10, options);
        World.add(world, this.body);
    }

    display() {
        fill("red");
        var pos = this.body.position
        rectMode(CENTER);
        rect(pos.x, pos.y, 800, 20);
    }
} 