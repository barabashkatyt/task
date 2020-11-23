import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      id: this.props.id,
    };
  }

  increaseValue = (e) => {
    this.setState({
      value: this.state.value + 1,
    });
    this.props.setData(this.state.id, this.state.value + 1);
  };

  decreaseValue = (e) => {
    this.setState({
      value: this.state.value - 1,
    });
    this.props.setData(this.state.id, this.state.value - 1);
  };

  render() {
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

Counter.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  setData: PropTypes.func.isRequired,
};
