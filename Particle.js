class Particle{
    constructor(x, y, r) {
        var options = {
            restitution:0.4     
        }

this.body = Bodies.circle(x, y, r, options);
this.radius = radius;
this.color = color(random(0, 255), random(0, 255), random(0, 255));

    }

display() {

var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x, pos.y);
rotate(angle);
noStroke();
fill(this.color);
ellipseMode();
ellipse(0, 0, pos.radius, pos.radius);
pop();

}

}