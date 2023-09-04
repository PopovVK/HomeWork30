import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValue,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  handleReset = () => {
    this.setState({ count: this.props.initialValue });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="counter">
        <div className="counter-content">
          <div className="button square" onClick={this.handleDecrement}>-</div>
          <div className="count">{count}</div>
          <div className="button square" onClick={this.handleIncrement}>+</div>
        </div>
        <div className="reset-button-container">
          <button className="reset-button" onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
