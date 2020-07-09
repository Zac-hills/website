import React, { Component } from "react";
import "./header.css";
import connect from "react-router-dom";
import HeaderButton from "./HeaderButton";

class Header extends Component {
  state = { redirect: false, scale: 0.05, renderArrow: false };
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.onTime = this.onTime.bind(this);
  }
  onScroll(event) {
    if (this.state.renderArrow) {
      this.setState({ renderArrow: false });
    }
  }
  componentDidMount() {
    console.log("mounted");
    window.setInterval(this.onTime, 2000);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
  onClick() {
    if (this.props.redirectCallback != null) {
      this.props.redirectCallback("/");
    }
  }
  onTime() {
    if (window.scrollY == 0) {
      window.addEventListener("scroll", this.onScroll);
    }
    clearInterval(this.onTime);
    this.setState({ renderArrow: true });
  }
  onArrowClick() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }
  render() {
    let arrow = <div></div>;
    if (this.state.renderArrow) {
      arrow = (
        <div
          className="arrow-head"
          style={{ opacity: 1 }}
          onClick={this.onArrowClick}
        ></div>
      );
    }
    return (
      <footer className="footer">
        <div style={{ float: "left", width: "50%", height: "100%" }}>
          <button className="footer-button" onClick={this.onClick.bind(this)}>
            HOME
          </button>
        </div>
        {arrow}
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
