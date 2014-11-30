describe("Game", function(){

  var game;
  var frame;

  beforeEach(function(){

    game = new Game;
    frame = new Frame;

  });

  it ('should contain 10 frames', function(){
    expect(game.frames.length).toEqual(10)
  });



});