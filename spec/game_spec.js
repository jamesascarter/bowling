describe("Game", function(){

  var game;

  beforeEach(function(){

    game = new Game;

  });

  it ('should contain 10 frames', function(){
    expect(game.frames.length).toEqual(10)
  });



});