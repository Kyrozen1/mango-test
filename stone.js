class Stone{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.image = loadImage("stone.png");
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        var pos = this.body.position
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}