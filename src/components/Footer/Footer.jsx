import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = { scale: 0.05 };
  render() {
    return (
      <footer className="footer">
        <div style={{ float:"left", width: "50%", height: "100%" }}>
          <button
            className="footer-button"
            onClick={function() {
              document
                .getElementById("renderwindow")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            HOME
          </button>
          <button
            className="footer-button"
            onClick={function() {
              document
                .getElementById("bio")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            BIO
          </button>
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
          <button
            className="footer-button"
            onClick={function() {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            CONTACT
          </button>
        </div>
        <div style={{ float:"left", width: "50%", height: "100%" }}>
          <a href="zachary.hills@uoit.net">
            <img
              className="icon"
              src="/mail.png"
              width={512 * this.state.scale}
              height={512 * this.state.scale}
            />
          </a>
          <a href="https://www.linkedin.com/in/zachary-hills-031333185/">
            <img
              className="icon"
              src="/linkedIn.png"
              width={635 * this.state.scale}
              height={540 * this.state.scale}
            />
          </a>
          <a href="https://github.com/Zac-hills">
            <img
              className="icon"
              src="github.png"
              width={512 * this.state.scale}
              height={512 * this.state.scale}
            />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
