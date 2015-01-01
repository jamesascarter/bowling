describe("tenthFrame", function(){
  var pin;
  var tenthFrame;

  beforeEach(function(){

    tenthFrame = new TenthFrame(pin);
    pin = new Pin;
  });

  it('should contain 10 pins', function(){
    expect(tenthFrame.pins.length).toEqual(10)
  });

  it('should add 2 to tenthScore if player bowls 1 and 1', function(){
  	tenthFrame.bowl(1);
  	tenthFrame.bowl(1);
  	expect(tenthFrame.tenthScore).toEqual([1,1])
  });

  it('should only allow 2 bowls if no strike/spare is bowled', function(){
  	tenthFrame.bowl(1);
  	tenthFrame.bowl(1);
  	tenthFrame.bowl(1);
  	expect(tenthFrame.tenthScore).toEqual([1,1])
  });

  it('should allow 3 bowls if strike is bowled on first bowl', function(){
  	tenthFrame.bowl(10);
  	tenthFrame.bowl(1);
  	tenthFrame.bowl(1);
  	expect(tenthFrame.tenthScore).toEqual([10,1,1])
  });

  });