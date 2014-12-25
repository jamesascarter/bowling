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

Array.prototype.sum = function() {
  for (var i = 0, L = this.length, sum = 0; i < L; sum += this[i++]);
  return sum;
};
