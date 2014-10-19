function Pin(){

	this.isUpright = true
};

Pin.prototype.hit = function(pin) {
	this.isUpright = false
};

function Frame() {

	this.score = [];

	this.pins = [];

	for (i=0; i < 10; i++){
			this.pins.push(pin)};

};

Frame.prototype.bowl = function(index, number) {
	this.pins.splice(index, number)
	this.score.push(number)
};
