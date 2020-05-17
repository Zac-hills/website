import React, { Component } from "react";
import "./header.css";
import connect from "react-router-dom";
import HeaderButton from "./HeaderButton";

class Header extends Component {
  state = { redirect: false, scale: 0.05 };
  onClick() {
    if (this.props.redirectCallback != null) {
      this.props.redirectCallback("/");
    }
  }
  render() {
    return (
      <footer className="footer">
        <div style={{ float: "left", width: "50%", height: "100%" }}>
          <button className="footer-button" onClick={this.onClick.bind(this)}>
            HOME
          </button>
        </div>
        <div
          style={{
            float: "left",
            width: "50%",
            height: "100%",
          }}
        >
          <a href="https://www.linkedin.com/in/zachary-hills-031333185/">
            <img
              className="icon"
              src={`${process.env.PUBLIC_URL}/linkedIn.png`}
              width={635 * this.state.scale}
              height={540 * this.state.scale}
              style={{ float: "right" }}
            />
          </a>
          <a href="https://github.com/Zac-hills">
            <img
              className="icon"
              src={`${process.env.PUBLIC_URL}/github.png`}
              width={512 * this.state.scale}
              height={512 * this.state.scale}
              style={{ float: "right" }}
            />
          </a>
        </div>
      </footer>
    );
  }
}

export default Header;
