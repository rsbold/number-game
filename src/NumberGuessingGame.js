import React from 'react';
import './App.css';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export class NumberGuessingGame extends React.Component {

  constructor() {
      // Always need to call super() before doing anything else.
      super();
      
      // Set up initial component state. This also defines the properties in state.
      this.state = {
        difficulty: 1,
        target: Math.floor((Math.random() * 10)),
        turnsRemaining: 10,
        guess:0,
        message:""
      }

      // Wire up handlers so they get the correct context of "this".
      this.setDifficulty = this.setDifficulty.bind(this);
      this.guessChange = this.guessChange.bind(this);
      this.checkGuess = this.checkGuess.bind(this);
      this.newGame = this.newGame.bind(this);
    }

    setDifficulty(event) {
      // We'll set difficulty to 1, 2 or 3.
      // This will be used as an exponent when setting the target value so
      // difficulty 1 means target is between 1 and 10
      // difficulty 2 means target is 1 to 100
      // difficulty 3 means target is 1 to 1000.
      var d = event.target.value;
      if(d >= 1 && d <= 3) {
        this.setState({
          difficulty: d,
        });
      }
      this.newGame();

    }
    newGame() {
      // Set various bits of state to reset the game.
      this.setState({
        target: Math.floor(Math.random() * Math.pow(10 ,this.state.difficulty)),
        turnsRemaining: 10,
        guess:0,
        message: ""
      });
    }

    guessChange(event) {
      // Need to do this because guess is a controlled component, i.e. value
      // is controlled by the component state.  When the input control changes
      // we will update component state, which will cause the input control to 
      // be re-rendered.
      var g = event.target.value;
      this.setState({guess:g});
    }

    checkGuess() {
      // The value the user guessed (this.state.guess) was set in guessChange().
      // We'll compare the properties of component state and set the message
      // appropriately.  We'll also dec the number of turns remaining.  We set
      // the new values in the setState call at the bottom, which will cause
      // the relevant bits of the UI to be re-rendered.
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
      // Do we need to display a Game Over message?
      var gameOver;
      if(this.state.turnsRemaining === 0) {
        gameOver = <span>Game Over</span>
      }
      
      // This is the whole UI for the game.
      return(
        <Card>
          <Card.Header>Guess the Number</Card.Header>
          <Card.Body>

            <Row>
              <Col lg={2}>Difficulty (1, 2, 3)</Col>
              <Col lg={1}><Form.Control type="number" value={this.state.difficulty} onChange={this.setDifficulty} /></Col>
            </Row>
            <Row>
              <Button onClick={this.newGame}>New Game</Button>
            </Row>
            <Row>
              <p>hint: target is {this.state.target}</p>
            </Row>
            <Row>
              <p>{this.state.turnsRemaining} turn(s) remaining</p>
            </Row>
            <Row>
              <label>Your guess:</label>
              <Form.Control type="number" value={this.state.guess} onChange={this.guessChange}/>
              <Button onClick={this.checkGuess}>Check Guess</Button>
            </Row>
            <Row>
              <span>{this.state.message}</span>
            </Row>
            <Row>
              {gameOver}
            </Row>
          </Card.Body>
        </Card>
      )
    }
}

export default NumberGuessingGame;
