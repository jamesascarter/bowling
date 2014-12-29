describe("Game", function(){

  var game;
  var frame;
  var pin;

  beforeEach(function(){

    pin = new Pin;
    frame = new Frame(pin);
    game = new Game();

  });

  it ('should contain 10 frames', function(){
    expect(game.frames.length).toEqual(9)
  });

  it ('should be able to sum the two scores and put them in a total array', function(){
    game.frames[0].bowl(3)
    game.frames[0].bowl(1)
    game.pushTotal(frame)
    expect(game.totalScore.length).toEqual(1)
  });

  it ('should know which is the next frame', function(){
    expect(game.nextFrameNo(game.frames[0])).toEqual(1);
  });

});