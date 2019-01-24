import React from 'react';
import { calculateWinner } from '../../services/winners';

const Status = props => {
  const {
    squares,
    xIsNext
  } = props;
  const winner = calculateWinner(squares);
  const effect = winner ? 'bounce' : '';
  let status;

  if(winner) {
    status = 'Winner is: '+ winner;
  }else{
    status = 'Next player is: '+ (xIsNext?'x':'o');
  }

  return(
  <div className="game-info__status">
    <div className={'status '+effect}>{status}</div>
    </div>
);

};

export default Status;
