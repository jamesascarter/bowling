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
	if (this.score.length < 2){
	this.pins.splice(index, number)
	this.score.push(number)
}
	else
	console.log('yo')
};
