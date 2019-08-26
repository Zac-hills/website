import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = { scale: 0.1 };
  render() {
    return (
      <footer className="footer">
        <a href="zachary.hills@uoit.net">
          <img
            src="/Gmail_Icon.png"
            width={512 * this.state.scale}
            height={512 * this.state.scale}
          />
        </a>
        <a href="https://www.linkedin.com/in/zachary-hills-031333185/">
          <img
            src="/LI-In-Bug.png"
            width={635 * this.state.scale}
            height={540 * this.state.scale}
          />
        </a>
        <a href="https://github.com/Zac-hills">
          <img
            src="GitHub-Mark-Light-120px-plus.png"
            width={120 * 0.5}
            height={120 * 0.5}
          />
        </a>
      </footer>
    );
  }
}

export default Footer;
