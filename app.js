$(function () {
  var canvas = $("<canvas width='" + 500 +
                 "' height='" + 500 + "'></canvas>");
  $('body').append(canvas);

  // `canvas.get(0)` unwraps the jQuery'd DOM element;
  var asteroid = MovingObjects.MovingObject.randomMovingObject(500,500)

  console.log(asteroid)
});