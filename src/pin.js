function Pin(){
	this.isUpright = true
};

Pin.prototype.hit = function() {
	this.isUpright = false
};

function Frame(pin) {

	this.score = [];
	this.pins = [];

	for (i=0; i < 10; i++){
			this.pins.push(pin)};
};

Frame.prototype.bowl = function(number) {
	INDEXNOUGHT = 0;
	FRAMESIZE = 2;

	if (this.score.length < FRAMESIZE){
	this.pins.splice(INDEXNOUGHT, number)
	this.score.push(number)
}
	else
	console.log('frame completed')
};
