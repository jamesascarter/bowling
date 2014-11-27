describe("Pin", function(){

	var pin;

	beforeEach(function(){

	pin = new Pin;

	});

	it("should be upright once is created", function(){
		expect(pin.isUpright).toBe(true);
	});

	it("should change to down when hit", function(){
		pin.hit(pin)
		expect(pin.isUpright).toBe(false)
	});
});
