import React, { Component } from "react";

class Button extends Component {
  handleClickParent = () => {
    this.props.handleClick(this.props.name);
  };
  render() {
    return (
      <button
        id={this.props.id}
        onClick={this.handleClickParent}
        className="button"
      >
        {this.props.name}
      </button>
    );
  }
}

export default Button;
