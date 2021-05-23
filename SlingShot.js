class SlingShot{
constructor(bodyA,bodyB){
    var option = {bodyA : bodyA,
       pointB : pointB,
       stiffness : 0.04,
       lenght : 20 
    }
    this.pointB = this.pointB
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    
}
 fly(){
     this.sling.body = null;
 }

 attach(body){
    this.sling.body = body;
}

 display(){
     if(this.sling.bodyA){
         var pointA = this.sling.bodyA.positon;
         var pointB = this.pointB;

         strokrWeight(4);
         fill ("red");
         line (pointA.x,pointA.y,ppointB.x,pointB.y);
     }


 }
}