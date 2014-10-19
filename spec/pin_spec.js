describe("Pin", function(){

	it("should be upright once is created", function(){
		pin = new Pin
		expect(pin.isUpright).toBe(true);
	});

	it("should change to down when hit", function(){
		pin = new Pin
		pin.hit(pin)
		expect(pin.isUpright).toBe(false)
	});
});

describe("Frame", function(){

	it("should contain pins", function(){
		frame = new Frame
		expect(frame.pins instanceof Array).toEqual(true)
	});

	it("should contain 10 pins", function(){
		frame = new Frame
		pin = new Pin
		frame.addPins(pin)
		expect(frame.pins.length).toEqual(10)
	});

});
