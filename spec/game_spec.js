describe("Game", function(){

  var game;
  var frame;

  beforeEach(function(){

    game = new Game;
    frame = new Frame;

  });

  it ('should contain 10 frames', function(){
    expect(game.frames.length).toEqual(9)
  });

   it('should be able to sum the two scores and put them in a total array', function(){
    frame.bowl(3)
    frame.bowl(1)
    frame.pushTotal()
    expect(game.totalScore).toEqual([4])
  });



});