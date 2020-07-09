import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = { scale: 0.05, renderArrow: true };
  onScroll() {
    this.setState({ renderArrow: false });
  }
  onComponentDidMount() {
    window.addEventListener("scroll", this.onScroll.bind(this));
  }
  render() {
    let arrow = <div></div>;
    if (this.state.renderArrow) {
      arrow = (
        <div className="circle">
          <div className="arrow-head" style={{ opacity: 1 }}></div>
        </div>
      );
    }
    return (
      <footer className="footer">
        <div style={{ float: "left", width: "50%", height: "100%" }}>
          <button
            className="footer-button"
            onClick={function () {
              document
                .getElementById("renderwindow")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            HOME
          </button>
          <button
            className="footer-button"
            onClick={function () {
              document
                .getElementById("bio")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            BIO
          </button>
          <button
            className="footer-button"
            onClick={function () {
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            PROJECTS
          </button>
          <button
            className="footer-button"
            onClick={function () {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            CONTACT
          </button>
        </div>
        {arrow}
        <div style={{ float: "left", width: "50%", height: "100%" }}>
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

export default Footer;
