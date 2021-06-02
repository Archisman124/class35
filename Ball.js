class Ball  {
  constructor(x, y){
    var options = {
      'restitution':0.1,
      'frictionAir':0.004,
      'density':1.0
  }
  this.body = Bodies.circle(x, y,50, options);
 this.radius=50
  
  World.add(world, this.body);
}
display(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  ellipseMode(RADIUS);
  ellipse( 0, 0, this.radius);
  pop();
}
}
