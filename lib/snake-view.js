(function(){
  if (typeof SnakeGame === "undefined"){
    window.SnakeGame = {};
  }

  var View = SnakeGame.View = function($el) {
    this.$el = $el;
    this.board = new SnakeGame.Board(20);

    this.setupGrid();

    this.interval = setInterval(
      this.snakeMove.bind(this),
      View.SPEED
    );
  };

  View.SPEED = 1000;

  View.prototype.setupGrid = function () {
    var html = "";

    for (var i = 0; i < this.board.dimension; i++) {
      html += "<ul>";
      for (var j = 0; j < this.board.dimension; j++) {
        html += "<li></li>";
      }
      html += "</ul>";
    }

    this.$el.html(html);
    this.$li = this.$el.find("li");
  };

  View.prototype.render = function () {
    this.updateClasses(this.board.snake.snakeCoords, "snake");
  };

  View.prototype.updateClasses = function(coords, className) {
    this.$li.filter("." + className).removeClass();

    coords.forEach(function(coord){
      var flatCoord = (coord.i * this.board.dimension) + coord.j;
      this.$li.eq(flatCoord).addClass(className);
    }.bind(this));
  };

  View.prototype.snakeMove = function(){
    this.board.snake.move();
    this.render();
  };
})();
