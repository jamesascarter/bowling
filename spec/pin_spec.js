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
