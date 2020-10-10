import React from 'react';
import './App.css';

export class NumberGuessingGame extends React.Component {

    constructor() {
      super();
      this.state = {
        target: Math.floor((Math.random() * 10)),
        turnsRemaining: 10,
        guess:0,
        message:""
      }
      this.guessChange = this.guessChange.bind(this);
      this.checkGuess = this.checkGuess.bind(this);
      this.newGame = this.newGame.bind(this);
    }

    newGame() {
      this.setState({
        target: Math.floor(Math.random() * 10),
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
      var message;
      if(this.state.guess < this.state.target) {
        message = "Too Low!";
      } else if (this.state.guess > this.state.target) {
        message = "Too high!";
      } else {
        message = "CORRECT!";
      }
      this.setState({
        message: message,
        turnsRemaining:this.state.turnsRemaining - 1});
    }

    render()
    {
      var gameOver;
      if(this.state.turnsRemaining === 0) {
        gameOver = <p>Game Over</p>
      }
      return(

        <div>
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
