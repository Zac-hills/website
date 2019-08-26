import React, { Component } from "react";
import "./header.css";
import connect from "react-router-dom";
import HeaderButton from "./HeaderButton";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <HeaderButton title="Bio" />
        <HeaderButton title="Articles" />
        <HeaderButton title="Projects" />
      </header>
    );
  }
}

export default Header;
