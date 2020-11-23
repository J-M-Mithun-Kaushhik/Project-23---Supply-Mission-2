class Box {
    constructor(x, y, width, height,options) {
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      var options ={
        isStatic: false
      }
    }
    display(){
      var pos =this.body.position;
      fill("red");
      rect(pos.x,pos.y,this.width,this.height);
    }
  }
  