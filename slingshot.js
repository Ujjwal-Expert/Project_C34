class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:850
        }
        this.sling = Constraint.create(options);
        World.add(myWorld,this.sling);

    }
    display(){
        push();
        stroke("white");
        strokeWeight(2)
        line(this.sling.bodyA.position.x-45,this.sling.bodyA.position.y-48,this.sling.pointB.x,this.sling.pointB.y);
        pop()
    }
}