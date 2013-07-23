// require('./moving_object.js')

function Surrogate() {};

var Asteroid =function () {};

Surrogate.prototype = MovingObjects.prototype;
Asteroid.prototype = new Surrogate();



// function Asteroid() {
//   this.MovingObject(centerX,centerY,radius)
// }