import React from 'react';
import './App.css';

export class NumberGuessingGame extends React.Component {

  constructor() {
      super();
      this.state = {
        difficulty: 1,
        target: Math.floor((Math.random() * 10)),
        turnsRemaining: 10,
        guess:0,
        message:""
      }
      this.setDifficulty = this.setDifficulty.bind(this);
      this.guessChange = this.guessChange.bind(this);
      this.checkGuess = this.checkGuess.bind(this);
      this.newGame = this.newGame.bind(this);
    }

    setDifficulty(event) {
      var d = event.target.value;
      if(d >= 1 && d <= 3) {
        this.setState({
          difficulty: d,
        });
      }
      this.newGame();

    }
    newGame() {
      this.setState({
        target: Math.floor(Math.random() * Math.pow(10 ,this.state.difficulty)),
        turnsRemaining: 10,
        guess:0,
        message: ""
      });
    }

    guessChange(event) {
      var g = event.target.value;
      this.setState({guess:g});
    }

    checkGuess() {
      var msg;
      if(this.state.guess < this.state.target) {
        msg = "Too Low!";
      } else if (this.state.guess > this.state.target) {
        msg = "Too high!";
      } else {
        msg = "CORRECT!";
      }
      this.setState({
        message: msg,
        turnsRemaining: this.state.turnsRemaining - 1
      });
    }

    render()
    {
      var gameOver;
      if(this.state.turnsRemaining === 0) {
        gameOver = <p>Game Over</p>
      }
      return(

        <div>
          <label>Difficulty (1, 2, 3)</label>
          <input type="number" value={this.state.difficulty} onChange={this.setDifficulty} />
          <button onClick={this.newGame}>New Game</button>
          <p>hint: target is {this.state.target}</p>
          <p>{this.state.turnsRemaining} turn(s) remaining</p>
          <p>
            <label>Your guess:</label>
            <input type="number" value={this.state.guess} onChange={this.guessChange}/>
            <button onClick={this.checkGuess}>Check Guess</button>
            <p>{this.state.message}</p>
            <p>{gameOver}</p>
          </p>
        </div>
      )
    }
}

export default NumberGuessingGame;
