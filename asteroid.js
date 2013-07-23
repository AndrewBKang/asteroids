// require('./moving_object.js')

function Surrogate() {};
Surrogate.prototype = MovingObjects.MovingObject.prototype;

function Asteroid(screenX, screenY, radius, deltaX, deltaY, game) {
  MovingObjects.MovingObject.call(this, screenX, screenY, radius);
  this.deltaX = deltaX;
  this.deltaY = deltaY;
  this.game = game;
  // function Asteroid(centerX,centerY) = {};

};

Asteroid.MAX_RADIUS = 25;
Asteroid.MAX_VELOCITY = 2;
Asteroid.randomAsteroid = function(screenX, screenY, game) {
  var yingYang = function() {
    return [-1,1][Math.floor(Math.random()*2)];
  }
  return new Asteroid(
    screenX * Math.random(),
    screenY * Math.random(),
    Asteroid.MAX_RADIUS * Math.random(),
    Asteroid.MAX_VELOCITY * Math.random() * yingYang(),
    Asteroid.MAX_VELOCITY * Math.random() * yingYang(),
    game
  );
}

Asteroid.prototype = new Surrogate();

Asteroid.prototype.render = function (ctx) {
  // ctx.fillStyle = "clear"

  // ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(
    this.centerX,
    this.centerY,
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.strokeStyle = "white";
  ctx.lineWidth = 1.25;
  ctx.stroke();
  // ctx.fill();
}

// function Asteroid() {
//   this.MovingObject(centerX,centerY,radius)
// }