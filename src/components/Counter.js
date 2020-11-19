import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      key: this.props.key,
    };
  }

  increaseValue = (e) => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  decreaseValue = (e) => {
    this.setState({
      value: this.state.value - 1,
    });
  };
  render() {
    console.log(this.props);
    return (
      <div className="counter">
        <b>{this.state.value}</b>
        <div className="counter-controls">
          <button
            className="button btn btn-outline-danger btn-sm"
            onClick={() => this.decreaseValue()}
          >
            -
          </button>
          <button
            className="button btn btn-outline-success btn-sm"
            onClick={() => this.increaseValue()}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
