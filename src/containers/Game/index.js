import React from 'react';
import Board from '../../components/Board';
import Status from '../../components/Status';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: [Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)],
			xIsNext: true,
  		stepNumber: 0,
			win: ''
		};
		this.handleClick = this.handleClick.bind(this);
		this.reset = this.reset.bind(this);

	}

	handleClick(coordinates) {
		const row = coordinates.split(' ')[0];
		const column = coordinates.split(' ')[1];
		const player = this.state.xIsNext ? 'x' : 'o';
		const {squares} = this.state;
		this.setState({
			squares: squares.map((squareRow, index) => {
				return index === Number(row) ? squareRow.map((squareColumn, indexColumn) => {
				return indexColumn === Number(column) ? squareColumn || player : squareColumn}) : squareRow
			})
		})

		this.calculateWinner(squares, player)

		this.toggleCurrentPlayer();
	}

	toggleCurrentPlayer() {
		this.setState({xIsNext: !this.state.xIsNext})
	}

	reset() {
		this.setState({
			xIsNext: true,
			squares: [Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)],
			win: ''
		})
	}

	calculateWinner(squares, player) {
	  const successOptions = [
			[[0, 0], [0, 1], [0, 1]],
			[[1, 0], [1, 1], [1, 1]],
			[[2, 0], [2, 1], [2, 1]],
			[[0, 0], [1, 0], [2, 0]],
			[[0, 1], [1, 1], [2, 1]],
			[[0, 2], [1, 2], [2, 2]],
			[[0, 0], [1, 1], [2, 2]],
			[[2, 2], [1, 1], [0, 0]]
	  ];

		successOptions.forEach((option, index) => {
			const optionSuccess = option.map(result => {
				return this.checkSuccess(result, player)
			})
			const a = optionSuccess.every(finalResult => Boolean(finalResult) === true)
			if(a) {
				this.setState({
					win: this.state.xIsNext ? 'x' : 'o'
				})
			}
		})
	}

	checkSuccess(option, player) {
		const row = option[0];
		const column = option[1];

		return this.state.squares[row][column] === player
	}

	render() {
		const squares = this.state.squares;

		return(
			<div className="game">
				<div className="game-board">
					<Board
						squares={squares}
						handleClick={this.handleClick}
					/>
				</div>
				<div className="game-info">
					<Status win={this.state.win} xIsNext={ this.state.xIsNext } />
				</div>
				<button onClick={this.reset}> Reset</button>
			</div>
		);
	}
}

export default Game;
