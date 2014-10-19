describe("Pin", function(){

	beforeEach(function(){

		pin = new Pin
		frame = new Frame
	});

	it("should be upright once is created", function(){
		expect(pin.isUpright).toBe(true);
	});

	it("should change to down when hit", function(){
		pin.hit(pin)
		expect(pin.isUpright).toBe(false)
	});
});

describe("Frame", function(){

	it("should contain pins", function(){
		expect(frame.pins instanceof Array).toEqual(true)
	});

	it("should contain 10 pins", function(){
		expect(frame.pins.length).toEqual(10)
	});

	it("should be able to knock down a number of pins", function(){
		frame.bowl(0, 5)
		expect(frame.pins.length).toEqual(5)
	});

	it("should add result to the score", function(){
		frame1 = new Frame
		frame1.bowl(0,4)
		expect(frame1.score).toEqual([4])


	});

});
