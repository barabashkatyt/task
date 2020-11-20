import React, { Component } from "react";
import Average from "./components/Average";
import CounterList from "./components/CounterList";
import "./styles.scss";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 2 },
  { id: 3, value: 1 },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }

  setData = (id, newValue) => {
    for (let i in data) {
      if (data[i].id === id) {
        data[i].value = newValue;
      }
    }
    this.setState({ data: data });
  };

  render() {
    return (
      <div>
        <CounterList data={this.state.data} setData={this.setData} />
        <Average data={this.state.data} />
      </div>
    );
  }
}
