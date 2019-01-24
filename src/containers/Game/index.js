import React from 'react';
import Board from '../../components/Board';
import Status from '../../components/Status';
import Moves from '../../components/Moves';
import { calculateWinner } from '../../services/winners';

class Game extends React.Component {
	//Setup component initial state values and bind methods
	constructor(props){
		super(props); //Access parent functions
		this.state = {
			history: [{
				squares:Array(9).fill(null),
				//Help calculate the col and row where the latest click happened
				clickIndex:null
			}],
			xIsNext: true,
      		stepNumber: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.jumpTo = this.jumpTo.bind(this);
	}

	//...
	//- Updates app's history (based on the current step)
	//- Make sure no selection happens on the same square or if the game has been won already
	//- Records each move and save it in the history
	//- Switch to the next player
	handleClick(i){
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if(squares[i] || calculateWinner(squares)) {
			return;
		}
		squares[i] = this.state.xIsNext?'x':'o';
		this.setState({
			history		: history.concat([{ squares:squares, clickIndex:i }]),
      		stepNumber	: history.length,
			xIsNext		: !this.state.xIsNext
		});
	}

  	//...
  	//Changes the game current step and update player's turn accordingly
  	//(will influence the game history)
	jumpTo(step) {
	    this.setState({
	      stepNumber: step,
	      xIsNext: (step % 2) === 0
	    });
	}

	//Renders React element ...
	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const squares = current.squares.slice();

		return(
			<div className="game">
				<div className="game-board">
					<Board squares={squares} onClick={this.handleClick} cells={[0,1,2,3,4,5,6,7,8]} />
				</div>
				<div className="game-info">
					<Status squares={ squares } xIsNext={ this.state.xIsNext } />
					<Moves history={ this.state.history } stepNumber={ this.state.stepNumber } onClick={this.jumpTo} />
				</div>
			</div>
		);
	}
}

export default Game;
