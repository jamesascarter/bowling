function Game(){

  this.totalScore = [];
  this.frames = [];
  this.bonuses = [];

  for (var i=0; i < 10; i++){
      this.frames[i] = new Frame;
    };

};

Game.prototype.pushTotal = function() {
	for (var i=0; i < 10; i++){
      this.totalScore.push(this.frames[i].score.sum())};
};

Game.prototype.applyBonuses = function() {
	for (var i=0; i < 9; i++){

      if (this.frames[i].isSpare()){
      	this.bonuses.push(this.frames[i + 1].score[0]);
      }

      if (this.frames[8].isStrike()){
				this.bonuses.push(this.frames[9].score.sum());
			}

      if (this.frames[i].isStrike() && this.frames[i + 1].score[0] != 10){
				this.bonuses.push(this.frames[i + 1].score.sum());
			}

			if (this.frames[i].isStrike() && this.frames[i + 1].isStrike()){
				this.bonuses.push(this.frames[i + 1].score[0] + this.frames[i + 2].score[0]);
			}

			else {return ('no bonus');
			};
    };
};