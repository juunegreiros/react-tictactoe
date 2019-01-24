import React from 'react';
import '../../assets/styles/square.css';

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    };
  }

  render() {
    const {
      coordinate,
      handleClick,
      value
    } = this.props;

    return (
      <button
        className={`square ${value}`}
        onClick={() => handleClick(coordinate)}
      />
    );

  }
}

export default Square;
