import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = { scale: 0.05 };
  render() {
    return (
      <footer className="footer">
        <div style={{ display: "inline-block", width: "50%", height: "100%" }}>
          <button className="footer-button">HOME</button>
          <button className="footer-button">BIO</button>
          <button
            className="footer-button"
            onClick={function() {
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            PROJECTS
          </button>
          <button className="footer-button">CONTACT</button>
        </div>
        <div style={{ display: "inline-block", width: "50%", height: "100%" }}>
          <a href="zachary.hills@uoit.net">
            <img
              className="icon"
              src="/Gmail_Icon.png"
              width={512 * this.state.scale}
              height={512 * this.state.scale}
            />
          </a>
          <a href="https://www.linkedin.com/in/zachary-hills-031333185/">
            <img
              className="icon"
              src="/LI-In-Bug.png"
              width={635 * this.state.scale}
              height={540 * this.state.scale}
            />
          </a>
          <a href="https://github.com/Zac-hills">
            <img
              className="icon"
              src="GitHub-Mark-Light-120px-plus.png"
              width={120 * 0.25}
              height={120 * 0.25}
            />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
