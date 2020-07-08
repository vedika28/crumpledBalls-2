class Paper {

    constructor() {
        var options = {
            isStatic: true,
            density: 1.2,
            friction: 1.5
        }

        this.body = Bodies.circle(50, 600, 35, options);
        World.add(world, this.body);
        this.image=loadImage("paper.png");
    }

    display() {
        fill("pink");
        var pos=this.body.position
        ellipseMode(CENTER);
        ellipse(this.body, 50, 600 ,70,70)
        imageMode(CENTER);
        image(this.image, pos.x, pos.y ,70,70);
    }
}