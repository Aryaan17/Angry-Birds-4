class Chain {
    constructor(bodyA, bodyB){
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            'length' : 20,
            'stiffness' : 0.2
        }
        this.chain = Constraint.create(options);
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        World.add(world, this.chain);
    }
    display() {
        strokeWeight(5);
        line(this.bodyA.position.x, this.bodyA.position.y, this.bodyB.position.x, this.bodyB.position.y);
    }
}