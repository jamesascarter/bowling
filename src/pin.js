function Pin(){

	this.isUpright = true
};

function Frame() {

	this.pins = []

};

Pin.prototype.hit = function(pin) {
	this.isUpright = false
};

Frame.prototype.addPins = function(pin) {
		for (i=0; i < 10; i++){
			this.pins.push(pin)};
};
