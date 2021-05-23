class Block{
constructor(x,y,width,height){

    var option = {restitution : 0.4,
    friction : 1.0,
    isStatic : true
}

this.body = Bodies.rectangle(x,y,width,height,option);
this.width = width;
this.height = height;
World.add(world,this.body);
}

display(){

        if(this.body.speed<3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(995,95,19);
        rect(0, 0, this.width, this.height);
        pop();
      }
       }
        }

