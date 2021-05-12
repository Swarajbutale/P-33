class SnowFall{
    constructor(x,y) {
        var options = {
            density : 0.5,
            friction : 0.5,
            isStatic : false, 
        }
        this.r = 20;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
    }
}