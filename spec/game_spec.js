describe("Game", function(){

  var game;
  var frame;
  var pin;

  beforeEach(function(){

    pin = new Pin;
    frame = new Frame(pin);
    game = new Game();

  });

  it('should contain 10 frames', function(){
    expect(game.frames.length).toEqual(9)
  });

  it('should be able to sum the two scores and put them in a total array', function(){
    game.frames[0].bowl(3)
    game.frames[0].bowl(1)
    game.pushTotal(frame)
    expect(game.totalScore.length).toEqual(1)
  });

  it('should know which is the next frame', function(){
    expect(game.nextFrameNo(game.frames[0])).toEqual(1);
  });

  it('should add next bowl to bonus score when spare is bowled', function(){
    game.frames[0].bowl(3);
    game.frames[0].bowl(7);
    game.frames[1].bowl(1);
    game.frames[1].bowl(0);
    game.applyBonuses();
    expect(game.bonuses).toEqual([1]);
  });

  it('should add next 2 bowls to bonus score when strike is bowled', function(){
    game.frames[0].bowlStrike();
    game.frames[1].bowl(1);
    game.frames[1].bowl(1);
    game.applyBonuses();
    expect(game.bonuses).toEqual([2]);
  });

  it('should add bonus of 20 points if 2 strikes are bowled after a strike i.e three consecutive', function(){
    game.frames[0].bowlStrike();
    game.frames[1].bowlStrike();
    game.frames[2].bowlStrike();
    game.applyBonuses();
    expect(game.bonuses).toEqual([10, 10, 10])
  });

});