function Game(frame){

  this.frames = [];
  this.totalScore = [];

  for (var i=0; i < 9; i++){
      this.frames.push(new Frame)};

};

Game.prototype.pushTotal = function(frame) {
  this.totalScore.push(frame.score.sum());
};