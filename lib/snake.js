(function(){
  if (typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }

  var Snake = SnakeGame.Snake = function(board){
    this.direction = "N";
    this.board = board;
    var start = new SnakeGame.Coord(10,10);
    this.snakeCoords = [start];
  };

  Snake.prototype.head = function(){
    return this.snakeCoords[this.snakeCoords.length - 1];
  };

  Snake.prototype.move = function(){
    debugger;
    this.snakeCoords.push(this.head().plus(Snake.DIRECTIONS[this.direction]));
  };

  Snake.prototype.turn = function(direction){
    this.dir = direction;
  };

  Snake.DIRECTIONS = {
    "N": new SnakeGame.Coord(0,1),
    "S": new SnakeGame.Coord(0,-1),
    "W": new SnakeGame.Coord(-1,0),
    "E": new SnakeGame.Coord(1,0)
  };

  Snake.SYMBOL = "S";
})();
