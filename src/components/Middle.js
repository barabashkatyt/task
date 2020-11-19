import React, { Component } from "react";

class Middle extends Component {
  render() {
    return (
      <div className="middle">
        This is middle:&nbsp;
        <strong>{this.props.sum / this.props.length}</strong>
      </div>
    );
  }
}

export default Middle;
