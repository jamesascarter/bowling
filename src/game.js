function Game(){

  this.totalScore = [];
  this.frames = [];
  this.bonuses = [];

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

Game.prototype.applyBonuses = function() {
	for (var i=0; i < 9; i++){
      if (this.frames[i].score.sum() == 10){
      	this.bonuses.push(this.frames[i + 1].score[0])
      };
    };
};