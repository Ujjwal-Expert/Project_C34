class Ball {
    constructor(x,y,width,height,angle){
        var opt= {
            restitution:0.5,
            density:5,
            isStatic:false
        }
        this.body = Bodies.circle(x,y,width/2,opt);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);
        this.image=loadImage("sprites/spidy.png")
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.width);
        /*
        ellipseMode(CENTER);
        rotate(angle);
        fill("red");
        ellipse(0,0,this.width,this.height);*/
        pop();
    }
}