class Basketball {
    constructor(x,y){
        var options = {
            isStatic: true
        }
    this.body = Bodies.rectangle(x, y, 50,50, options);

    this.width = 50;
    this.height = 50;
    World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        //push();
        //translate(posX, posY);
        //rotate(angle);
        rectMode(CENTER);
        rect(posX, posY ,this.width ,this.height);
        //pop();
    }
}

