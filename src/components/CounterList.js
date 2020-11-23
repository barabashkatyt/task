import React, { Component } from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";

export default class CounterList extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            setData={this.props.setData}
          />
        ))}
      </div>
    );
  }
}

CounterList.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};
