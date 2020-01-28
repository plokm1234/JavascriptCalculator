import React, { Component } from "react";
import "./Screen.css";
class Screen extends Component {
  render() {
    return <div id="display">{this.props.currentNumber}</div>;
  }
}

export default Screen;
