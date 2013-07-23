var Game = function (screenX, screenY, numAsteroids) {
  this.screenX = screenX;
  this.screenY = screenY;
  this.asteroids = this.makeAsteroids(numAsteroids);
  this.ship = new Ship(this);
};

Game.prototype.makeAsteroids = function (num) {
  var that = this;
  var asteroids = [];

  var oneAsteroid = function () {
    return asteroids.push(Asteroid.randomAsteroid(that.screenX, that.screenY, that));
  };

  _(num).times(oneAsteroid);
  return asteroids;
};

Game.prototype.render = function (ctx) {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, this.screenX, this.screenY);

  var renderAsteroid = function (asteroid) {
    asteroid.render(ctx);
  };

  _.each(this.asteroids, renderAsteroid);
  this.ship.render(ctx);
};

Game.prototype.draw = function (canvasEl) {
  var ctx = canvasEl.getContext("2d");

  // render
  var that = this;
  window.setInterval(function () {
    that.render(ctx);
    that.update();
  }, 33);
};

Game.prototype.update = function () {
  var that = this;
  that.ship.velocity.x += that.ship.acceleration.x
  that.ship.velocity.y -= that.ship.acceleration.y

  that.ship.angle += that.ship.angularVelocity

  var updateShip = function () {
    that.ship.update(that.ship.velocity.x, that.ship.velocity.y);
  }

  var updateAsteroid = function (asteroid) {
    asteroid.update(asteroid.deltaX, asteroid.deltaY);
  };

  _.each(this.asteroids, updateAsteroid);
  updateShip();
};