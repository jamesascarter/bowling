describe("Game", function(){

  var game;
  var frame;
  var pin;

  beforeEach(function(){

    pin = new Pin;
    frame = new Frame(pin);
    game = new Game(frame);

  });

  it ('should contain 10 frames', function(){
    expect(game.frames.length).toEqual(9)
  });

  it ('should be able to sum the two scores and put them in a total array', function(){
    frame.bowl(3)
    frame.bowl(1)
    game.pushTotal(frame)
    expect(game.totalScore.length).toEqual(1)
  });

});