class SlingShot{
    constructor(bodyA, B){
        var options = {
            bodyA: bodyA,
            pointB: B,
            stiffness: 0.04,
            length: 1
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA=null;
        }
    display(){
        if (this.sling.bodyA!=null){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4)
        stroke("white")
        line(pointA.x, pointA.y+5, pointB.x, pointB.y);
        }
    }

   
} 