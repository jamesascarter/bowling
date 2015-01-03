### 10-Pin Bowling

This challenge set by Makers Academy requires me to:

Task: 

Count and sum the scores of a bowling game of one player(in javascript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can throw one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reseted.

Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That is the next frame, except if the player rolls a strike again.

Spares

The player has a spare if the knocks down all 10 pins with the two roles of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first role of next frame).

10th frame

If the player rolls a strike or spare in the 10th frame he can roll the additional balls for the bonus. But he can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus)
1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus)
Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores to 300 points.

### Tech

* Javascript
* Jasmine (testing)
* Dillinger - Markdown Editor

### How to use

Clone this repo:
```sh
$ git clone https://github.com/jamesascarter/bowling.git
```

Change into the directory:
```sh
$ cd Bowling
```

To run the Jasmine tests:
```sh
$ open SpecRunner.html
```

To run the code (e.g Perfect Game):

Firstly open up the console in the browser with Jasmine tests open.
```sh
$ game = new Game;
$ game.frames[0].bowlStrike();
$ game.frames[1].bowlStrike();
$ game.frames[2].bowlStrike();
$ game.frames[3].bowlStrike();
$ game.frames[4].bowlStrike();
$ game.frames[5].bowlStrike();
$ game.frames[6].bowlStrike();
$ game.frames[7].bowlStrike();
$ game.frames[8].bowlStrike();
$ game.frames[9].bowlStrike();
$ game.frames[9].bowlStrike();
$ game.applyBonuses();
$ game.frames[9].bonusBowl(10);
$ game.pushTotal();
$ game.calculateTotal(); 
    
```

I have implemented a bowl method with which you can specify number of pins hit.

### Improvements

* Clean up applyBonuses method.
* Further testing of diferent scoring secnarios to ensure all are covered.
* Name frames rather than using [0] index to specify frames.(e.g Frame1 rather than game.frames[0]).
* Fix penultimate game test. This tests bonuses are still added for 9th frame if is a strike. Logic works as shown in final test so must amend to pass.



