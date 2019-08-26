import React, { Component } from "react";
import "./headerbutton.css";

class HeaderButton extends Component {
  state = {};
  render() {
    return (
      <button className="header-button">
        <h1>{this.props.title}</h1>
      </button>
    );
  }
}

export default HeaderButton;
