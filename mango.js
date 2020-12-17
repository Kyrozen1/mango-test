class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.width = width;
        this.image = loadImage("mango.png")
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(RADIUS)
        image(this.image,pos.x,pos.y,50,50)
        this.body.depth = tree.depth;
        this.body.depth = this.body.depth + 1;
    }
}