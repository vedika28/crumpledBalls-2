class Dustbin {

    constructor() {
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(735, 580, 140, 10, options);
        World.add(world, this.body);
        this.image=loadImage("dutbin.png");
        this.width = 140;
        this.height = 140;
        World.add(world,this.image);
    }

    display() {
        imageMode(CENTER);
        image(this.image ,735,580,this.width,this.height);
    }
}