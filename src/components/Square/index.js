import React from 'react';

const Square = props => {
  const {
    value,
    ...other
  } = props;

  return (
    <button
      className={`square ${value}`}
      onClick={() => other.onClick()}
    >
      {value}
    </button>
  );
}

export default Square;
