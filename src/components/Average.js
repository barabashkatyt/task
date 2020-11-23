import React, { Component } from "react";

class Average extends Component {
  findAverage = (arr) => {
    let array = [];
    arr.map((obj) => array.push(obj.value));
    let arrsum = array.reduce((a, b) => a + b);
    let result = arrsum / arr.length;
    return result;
  };

  render() {
    const { data } = this.props;
    return (
      <div className="counter">
        <strong>Average is {this.findAverage(data)}</strong>
      </div>
    );
  }
}

export default Average;
