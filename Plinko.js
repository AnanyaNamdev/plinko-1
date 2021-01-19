class Plinko {
    constructor(x,y) {
      var options = {
          retitution:1,
          friction:0,
          isStatic: true
      }
      this.r = 10;
      this.body = Bodies.circle(x,y, this.r, options);
      World.add(world, this.body);
    }
    display(){

      translate(this.body.position.x, this.body.position.y);
      ellipseMode(CENTER);
      fill("white");
      ellipse(this.body.position.x, this.body.position.y, this.r);
    }
  };