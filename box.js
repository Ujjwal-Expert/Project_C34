class Box {
    constructor(x,y,width,height){
        var opt= {
            restitution:0.5,
            density:2,
            friction:0.5,
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,opt);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);
        this.image=loadImage("sprites/stone.png");
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        /*rectMode(CENTER);
        strokeWeight(0);
        fill("white");
        rect(0,0,this.width,this.height);*/
        pop();
    }
}