var MovingObjects = (function () {

  function MovingObject(centerX,centerY,radius) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
  };

  MovingObject.MAX_RADIUS = 25;
  MovingObject.randomMovingObject = function (screenX, screenY) {
    return new MovingObject(
      screenX * Math.random(),
      screenY * Math.random(),
      MovingObject.MAX_RADIUS * Math.random()
    );
  };

  MovingObject.prototype.update = function (deltaX, deltaY) {
    this.centerX = (this.centerX + deltaX);
    if (this.offScreen(500, 500)) {
      if (this.offScreen(500, 500) === "positive") {
        this.centerX = (this.centerX % 500) * -1
      } else {
        this.centerX = (this.centerX * -1) + 500
      }
    }
    this.centerY = (this.centerY + deltaY);
    if (this.offScreen(500, 500)) {
      if (this.offScreen(500, 500) === "positive") {
        this.centerY = (this.centerY % 500) * -1
      } else {
        this.centerY = (this.centerY * -1) + 500
      }
    }
  };

  MovingObject.prototype.offScreen = function (screenX, screenY) {
    if (
      (this.centerX > (this.radius + screenX)) ||
      (this.centerY > (this.radius + screenY))
    ) {
      return "positive"
    } else if (
      (this.centerX + this.radius) < 0 ||
      (this.centerY + this.radius) < 0
    ) {
      return "negative"
    } else {
      return null
    }
  };

  return {
    MovingObject: MovingObject
  };

})();