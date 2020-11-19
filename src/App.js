import React, { Component } from "react";
import Counter from "./components/Counter";
import Middle from "./components/Middle";

import "./styles.scss";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 2 },
  { id: 3, value: 1 },
];

let array = [];
let sum = 0;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }

  findMiddle = (arr) => {
    arr.map((obj) => {
      array.push(obj.value);
      sum = array.reduce((a, b) => a + b);
      return sum;
    });
  };

  render() {
    return (
      <div>
        {data.map((counter) => (
          <Counter key={counter.id} value={counter.value} />
        ))}
        <Middle length={data.length} sum={sum} />
      </div>
    );
  }
}
