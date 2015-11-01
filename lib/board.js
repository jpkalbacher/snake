(function(){
  if(typeof SnakeGame === 'undefined'){
    window.SnakeGame = {};
  }

  var Board = SnakeGame.Board = function(dimension){
    this.dimension = dimension;

    this.snake = new SnakeGame.Snake(this);
  };

  Board.prototype.grid = function(dimension){
    var grid = [];

    for(var i = 0; i < dimension; i++){
      var row = [];
      for (var j = 0; j < dimension; j++) {
        row.push(".");
      }
      grid.push(row);
    }
    return grid;
  };

  Board.prototype.render = function () {
    var grid = Board.grid(this.dim);

    this.snake.snakeCoords.forEach(function (snakeCoord) {
      grid[snakeCoord.i][snakeCoord.j] = Snake.SYMBOL;
    });

    var rowStrs = [];
    grid.map(function (row) {
      return row.join("");
    }).join("\n");
  };
})();
