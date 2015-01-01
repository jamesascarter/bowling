function TenthFrame(pin) {

	this.tenthScore = [];
	this.pins = [];
	this.bowls = 2;

	for (i=0; i < 10; i++){
      this.pins.push(pin)
  };
};

  TenthFrame.prototype.bowl = function(number) {

  INDEXNOUGHT = 0;


  if (this.tenthScore.sum() != 10 && this.tenthScore[0] != 10){

  FRAMESIZE = 2;

  	if (this.tenthScore.length < FRAMESIZE) {
  		this.pins.splice(INDEXNOUGHT, number);
  		this.tenthScore.push(number);
		}
		else{
			return 'Game completed'
		};
	};

};