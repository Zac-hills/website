import React, { Component } from "react";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import Bar from "../Bar/Bar";

class BioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="contentfield">
        <div style={{ width: "30%", display: "inline-block" }}>
          <ProfilePicture src="/ProfilePicture.jpg" />
        </div>
        <div style={{ display: "inline-block", width: "50%" }}>
          <div style={{ margin: "8%" }}>
            <Bar
              backgroundColor={getComputedStyle(
                document.documentElement
              ).getPropertyValue("--foreground-color1")}
              color={getComputedStyle(
                document.documentElement
              ).getPropertyValue("--foreground-color2")}
              labelColor={getComputedStyle(
                document.documentElement
              ).getPropertyValue("--background-color")}
              height="30px"
              value="50%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BioPage;
