function Game(){

  this.totalScore = [];
  this.frames = [];

  for (var i=0; i < 9; i++){
      this.frames[i] = new Frame;
    };

};

Game.prototype.pushTotal = function(frame) {
  this.totalScore.push(frame.score);
};

Game.prototype.nextFrameNo = function(frame) {
	return this.frames.indexOf(frame) + 1
};