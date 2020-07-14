import React, { Component } from "react";
import "./footer.css";

let intervalID = null;
class Footer extends Component {
  state = {
    scale: 0.05,
    renderArrow: false,
  };
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.onTime = this.onTime.bind(this);
  }
  onScroll(event) {
    if (this.state.renderArrow) this.setState({ renderArrow: false });
  }
  onTime() {
    console.log(window.scrollY);
    if (window.scrollY == 0) {
      window.addEventListener("scroll", this.onScroll);
      this.setState({ renderArrow: true });
    }
    window.clearInterval(intervalID);
  }
  componentDidMount() {
    console.log("mounted");
    intervalID=window.setInterval(this.onTime, 2000);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
  onArrowClick() {
    const footerSize = 100;
    window.scrollBy({
      top: window.innerHeight - footerSize,
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
          onClick={this.onArrowClick.bind(this)}
        ></div>
      );
    }
    return (
      <footer className="footer">
        <div style={{ display: "flex", width: "50%", height: "100%" }}>
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
        <div style={{ display:"flex",justifyContent:"flex-end", width: "50%", height: "100%" }}>
          <a href="https://www.linkedin.com/in/zachary-hills-031333185/">
            <img
              className="icon"
              src={`${process.env.PUBLIC_URL}/linkedIn.png`}
              width={29}
              height={29}
            />
          </a>
          <a href="https://github.com/Zac-hills">
            <img
              className="icon"
              src={`${process.env.PUBLIC_URL}/github.png`}
              width={29}
              height={29}
            />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
