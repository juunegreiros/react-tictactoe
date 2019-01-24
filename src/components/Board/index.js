import React from 'react';
import Square from '../Square';
import '../../assets/styles/board.css';

const Board = props => {
  const {
    squares,
    handleClick
  } = props;
  const rows = [0 , 1 , 2];

  return (
		<div className="board">
      {
        rows.map(row =>
          <div key={`${row}`} className="board-row">
            {
              rows.map(column =>
                <Square
                  key={`${row} ${column}`}
                  coordinate={`${row} ${column}`}
                  value={squares[row][column]}
                  handleClick={handleClick}
                />
              )
            }
          </div>
        )
      }
    </div>
	);
}

export default Board;
