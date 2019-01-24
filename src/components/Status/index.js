import React from 'react';

const Status = props => {
  const {
    win,
    xIsNext
  } = props;

  let status;


  if(win) {
    status = 'Winner is: ' + win;
  } else {
    status = 'Next player is: '+ (xIsNext ? 'x':'o');
  }

  return(
  <div className="game-info__status">
    <div className={'status'}>{status}</div>
  </div>
);

};

export default Status;
