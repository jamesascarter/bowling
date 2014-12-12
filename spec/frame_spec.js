describe("Frame", function(){
  var pin;
  var frame;
  var game;

  beforeEach(function(){

    frame = new Frame;
    pin = new Pin;

  });

  it("should contain 10 pins", function(){
    expect(frame.pins.length).toEqual(10);
  });

  it("should be able to knock down a number of pins", function(){
    frame.bowl(5);
    expect(frame.pins.length).toEqual(5)
  });

  it("should add result to the score", function(){
    frame.bowl(4)
    expect(frame.score).toEqual([4])
  });

  it('should contain only two scores', function(){
    frame.bowl(4)
    frame.bowl(4)
    frame.bowl(2)
    expect(frame.score).toEqual([4,4])
  });

  it('should be able to sum the two scores', function(){
    frame.bowl(4)
    frame.bowl(4)
    expect(frame.score.sum()).toEqual(8)

  });

});
