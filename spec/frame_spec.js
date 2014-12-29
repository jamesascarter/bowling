describe("Frame", function(){
  var pin;
  var frame;
  var game;

  beforeEach(function(){

    frame = new Frame(pin);
    frame2 = new Frame(pin);
    pin = new Pin;
    game = new Game();

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

  it('should return strike when strike is bowled', function(){
    expect(frame.bowl_strike()).toEqual('strike')
  });

  it('should add 10 to score when strike is bowled', function(){
    frame.bowl_strike()
    expect(frame.score.sum()).toEqual(10)
  });

  it("should return true and when spare is bowled", function(){
    frame.bowl(4);
    frame.bowl(6);
    expect(frame.isSpare()).toEqual(true);
  });

  it('should add bonus score from next bowl if spare is bowled', function(){
    frame.bowl(4);
    frame.bowl(1);
    expect(frame.isSpare()).toEqual(false);
  });

  xit('should contain a potential bonus score', function(){
    expect(frame.bonus).toEqual(0);
  });

});
