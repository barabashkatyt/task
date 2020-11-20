import React, { Component } from "react";

class Average extends Component {
  constructor(props) {
    super(props);
    this.state = {
      average: 0,
    };
  }

  findSum = () => {
    let array = [];
    this.props.data.map((obj) => array.push(obj.value));
    let arrsum = array.reduce((a, b) => a + b);
    return arrsum;
  };

  findAverage = () => {
    let result = this.findSum() / this.props.data.length;
    this.setState({
      average: result,
    });
    return result;
  };

  render() {
    return (
      <div className="counter">
        <strong>{this.state.average}&nbsp;</strong>
        <br></br>
        <button
          className="button btn btn-outline-success btn-lg"
          onClick={() => this.findAverage()}
        >
          Find average
        </button>
      </div>
    );
  }
}

export default Average;
