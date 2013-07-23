var MovingObjects = (function () {

  function MovingObject(centerX,centerY,radius) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius
  };

  MovingObject.MAX_RADIUS = 25;
  MovingObject.randomMovingObject = function (maxX,maxY) {
    return new MovingObject(
      maxX * Math.random(),
      maxY * Math.random(),
      MovingObject.MAX_RADIUS * Math.random()
    );
  };

  MovingObject.prototype.update = function (deltaX,deltaY) {
    this.centerX += deltaX;
    this.centerY += deltaY;
  };

  MovingObject.prototype.offScreen = function (screenX, screenY) {
    return (
      (this.centerX > this.radius + screenX) ||
      (this.centerY > this.radius + screenY) ||
      (this.centerX + this.radius) < 0 ||
      (this.centerY + this.radius) < 0
    )

  };

  return {
    MovingObject: MovingObject
  };

})();