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
    var nextCoord = this.head().plus(Snake.DIRECTIONS[this.direction]);

    if(this.isOccupying(nextCoord)){
      this.snakeCoords = [];
      alert('you lose!');
      return;
    }

    this.snakeCoords.push(nextCoord);

    if(!this.board.validPosition(this.head())){
      this.snakeCoords = [];
      alert('you lose!');
      return;
    }
    if(this.eatApple()){
      this.board.apple = new SnakeGame.Apple(this.board);
      return;
    }
    this.snakeCoords.shift();
  };

  Snake.prototype.turn = function(direction){
    this.direction = direction;
  };

  Snake.prototype.isOpposite = function(direction){
    if (
      direction === "N" && this.direction === "S" ||
      direction === "S" && this.direction === "N" ||
      direction === "E" && this.direction === "W" ||
      direction === "W" && this.direction === "E"
    ) {
      return true;
    }
  };

  Snake.DIRECTIONS = {
    "N": new SnakeGame.Coord(-1,0),
    "S": new SnakeGame.Coord(1,0),
    "E": new SnakeGame.Coord(0,1),
    "W": new SnakeGame.Coord(0,-1)
  };

  Snake.SYMBOL = "S";

  Snake.prototype.isOccupying = function(coord){
    var that = this;
    that.snakeCoords.forEach(function(snakeCoord){
      if(snakeCoord.isEqual(coord)){
        that.snakeCoords = [];
        alert('you lose!');
      }
    });
  };


  Snake.prototype.eatApple = function(){
    return (this.head().isEqual(this.board.apple.position));
  };
})();
