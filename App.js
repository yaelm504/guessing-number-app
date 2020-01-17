import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      guessedNum: 0,
      count: 0,
      numberToGuess: 0,
      message: "",
      guessList: []
      }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    }
  
    componentDidMount() {
      this.setState({
        numberToGuess: Math.floor(Math.random() * Math.floor(100))
      })
    }

    handleSubmit = (event) => {
      event.preventDefault();
      const countingSteps= this.state.count
      const newGuessedNum= event.target.value
      const newGuessList= [...this.state.guessList]
      newGuessList.push(newGuessedNum)
      if (this.state.guessedNum == this.state.numberToGuess) {
        this.setState({ message: "You guessed it!"})
      }
      if (this.state.guessedNum < this.state.numberToGuess) {
        this.setState({ message: "Too low..."})
      }
      if (this.state.guessedNum > this.state.numberToGuess) {
        this.setState({ message: "Too high..."})
      }
      this.setState ({
        guessedNum: newGuessedNum,
        count: countingSteps + 1,
        guessList: newGuessList
     })
    }

    handleChange = (event) => {
      const {name, value} = event.target;
      this.setState({ [name]: value })
    }
        
    render() {
      return (
          <div className="App">
            You need to guess a number from 1-100. Good luck!
            <br />
            <form onSubmit={this.handleSubmit}>
              <input type="text"
                  value={this.state.guessedNum}
                  name="guessedNum"
                  placeholder="Type number here"
                  onChange={this.handleChange}
              />
              <button>Guess!</button>
            </form>
            <h1> Your guess is... {this.state.guessedNum ? this.state.guessedNum : null}</h1>
            <h1>{this.state.message}</h1>
            {/* <h1> The number to guess is {this.state.numberToGuess}</h1> */}
            <p>You've made {this.state.count} guesses</p>
          </div>
          );
      }     
  }


export default App;
