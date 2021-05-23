class Stand{
constructor(x,y,width,height){
    var option = {
        isStatic : true
    }
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;
    World.add(world.this.body);
}

display(){
var angle = this.body.angle;
var pos = this.body.position
strokeWeight(2);
fill ("white");
push ();
translate (pos.x,pos.y);
rotate (angle);
rectMode(CENTRE);
rect(0,0,this.width,this.height);
pop ();
}

}