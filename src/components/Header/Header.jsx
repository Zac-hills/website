import React, { Component } from "react";
import "./header.css";
import connect from "react-router-dom";
import HeaderButton from "./HeaderButton";

let intervalID = null;
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
    intervalID = window.setInterval(this.onTime, 2000);
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
      this.setState({ renderArrow: true });
    }
    window.clearInterval(intervalID);
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
        <div
          style={{
            float: "left",
            width: "50vw",
            height: "100%",
            paddingLeft: "2vw",
          }}
        >
          <button className="footer-button" onClick={this.onClick.bind(this)}>
            HOME
          </button>
        </div>
        {arrow}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignContent: "flex-end",
            width: "47vw",
            height: "100%",
          }}
        >
          <a
            href="https://www.linkedin.com/in/zachary-hills-031333185/"
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <img
              className="icon"
              src={`${process.env.PUBLIC_URL}/linkedIn.png`}
              style={{ marginRight: "1vw", paddingBottom: "15%" }}
            />
          </a>
          <a
            href="https://github.com/Zac-hills"
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <img
              className="icon"
              src={`${process.env.PUBLIC_URL}/github.png`}
              style={{ marginRight: "2vw", paddingBottom: "15%" }}
            />
          </a>
        </div>
      </footer>
    );
  }
}

export default Header;
