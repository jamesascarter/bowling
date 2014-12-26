function Game(){

  this.totalScore = [];
  this.frames = [];

  for (var i=0; i < 9; i++){
      this.frames[i] = 'frame' + i;
    };

};

Game.prototype.pushTotal = function(frame) {
  this.totalScore.push(frame.score);
};