import React, { Component } from "react";

import "./App.css";
import Screen from "./components/Screen";
import Button from "./components/Button";

class App extends Component {
  state = {
    currentNumber: "0",
    operatorFlag: false,
    multiOperator: false,
    decimalFlag: false
  };
  handleClick = buttonName => {
    let currentNumber = this.state.currentNumber;
    let operatorFlag = this.state.operatorFlag;
    let multiOperator = this.state.multiOperator;
    switch (true) {
      case buttonName === "0" ||
        buttonName === "1" ||
        buttonName === "2" ||
        buttonName === "3" ||
        buttonName === "4" ||
        buttonName === "5" ||
        buttonName === "6" ||
        buttonName === "7" ||
        buttonName === "8" ||
        buttonName === "9":
        if (this.state.currentNumber !== "0") {
          currentNumber += buttonName;
          operatorFlag = false;
        } else {
          currentNumber = buttonName;
        }
        break;
      case buttonName === "+" ||
        buttonName === "-" ||
        buttonName === "*" ||
        buttonName === "/":
        if (!this.state.operatorFlag) {
          currentNumber += buttonName;
          operatorFlag = true;
          this.setState({ decimalFlag: false });
        } else if (
          this.state.operatorFlag &&
          buttonName === "-" &&
          currentNumber.charAt(currentNumber.length - 1) !== "-"
        ) {
          currentNumber += buttonName;
          multiOperator = true;
          this.setState({ decimalFlag: false });
        } else if (
          this.state.operatorFlag &&
          currentNumber.charAt(currentNumber.length - 1) === "-"
        ) {
          let newNum = currentNumber.slice(0, currentNumber.length - 2);
          currentNumber = newNum;
          currentNumber += buttonName;
          this.setState({ decimalFlag: false });
        }
        break;
      case buttonName === "C":
        currentNumber = "0";
        operatorFlag = false;
        this.setState({ decimalFlag: false });
        break;
      case buttonName === "=":
        currentNumber = eval(currentNumber);
        operatorFlag = false;
        this.setState({ decimalFlag: true });
        this.setState({ evaled: true });
        break;
      case buttonName === ".":
        if (!this.state.decimalFlag) {
          currentNumber += ".";
          this.setState({ decimalFlag: true });
        }
    }
    this.setState({ operatorFlag });
    this.setState({ currentNumber });
  };
  render() {
    return (
      <div id="grid">
        <Screen currentNumber={this.state.currentNumber} />
        <Button id="zero" name="0" handleClick={this.handleClick} />
        <Button id="one" name="1" handleClick={this.handleClick} />
        <Button id="two" name="2" handleClick={this.handleClick} />
        <Button id="three" name="3" handleClick={this.handleClick} />
        <Button id="four" name="4" handleClick={this.handleClick} />
        <Button id="five" name="5" handleClick={this.handleClick} />
        <Button id="six" name="6" handleClick={this.handleClick} />
        <Button id="seven" name="7" handleClick={this.handleClick} />
        <Button id="eight" name="8" handleClick={this.handleClick} />
        <Button id="nine" name="9" handleClick={this.handleClick} />
        <Button id="add" name="+" handleClick={this.handleClick} />
        <Button id="subtract" name="-" handleClick={this.handleClick} />
        <Button id="multiply" name="*" handleClick={this.handleClick} />
        <Button id="divide" name="/" handleClick={this.handleClick} />
        <Button id="equals" name="=" handleClick={this.handleClick} />
        <Button id="decimal" name="." handleClick={this.handleClick} />
        <Button id="clear" name="C" handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
