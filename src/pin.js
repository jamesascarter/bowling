function Pin(){

	this.isUpright = true
};

Pin.prototype.hit = function(pin) {
	this.isUpright = false
};