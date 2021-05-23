class Ground{
constructor(){
    var option = {isStatic : true}
    
    this.ground = Bodies.rectangle(450,390,900,20,option);
    World.add(world,this.ground);

}

display(){
 var pos = this.ground.position;
 strokeWeight(2);
 fill("black");
 rectMode(CENTER);
 rect(pos.x,pox.y,900,20);
}

}