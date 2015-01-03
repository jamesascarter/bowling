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
    expect(game.frames.length).toEqual(10)
  });

  it('should be able to sum the two scores and put them in a total array', function(){
    game.frames[0].bowl(3)
    game.frames[0].bowl(1)
    game.pushTotal(frame)
    expect(game.totalScore.length).toEqual(1)
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
    game.frames[3].bowl(3);
    game.frames[3].bowl(3)
    game.applyBonuses();
    expect(game.bonuses).toEqual([20, 13, 6])
  });

  it('should be able to calculate score of 30 if three strikes are bowled in final frame', function(){
    game.frames[9].bowlStrike();
    game.frames[9].bowlStrike();
    game.frames[9].bonusBowl(10);
    expect(game.frames[9].score).toEqual([10,10,10])
  });

  it('should add bonus of 20 if 3 strikes bowled starting at frame 9', function(){
    game.frames[8].bowlStrike();
    game.frames[9].bowlStrike();
    game.frames[9].bowlStrike();
    console.log(game.bonuses);
    game.applyBonuses();
    expect(game.bonuses).toEqual([20]);
  });

  it('should be able to provide a total score for the round', function(){
    game.frames[0].bowlStrike();
    game.frames[1].bowlStrike();
    game.frames[2].bowlStrike();
    game.frames[3].bowlStrike();
    game.frames[4].bowlStrike();
    game.frames[5].bowlStrike();
    game.frames[6].bowlStrike();
    game.frames[7].bowlStrike();
    game.frames[8].bowlStrike();
    game.frames[9].bowlStrike();
    game.frames[9].bowlStrike();
    game.frames[9].bonusBowl(10);
    game.pushTotal()
    game.applyBonuses();
    expect(game.calculateTotal()).toEqual(300);

  });

});