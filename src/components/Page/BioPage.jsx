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
        <p className="title">BIO</p>
        <div className="backgroundcard">
          <div
            style={{
              width: "30%",
              display: "inline-block",
              verticalAlign: "top",
              marginTop: "40px"
            }}
          >
            <ProfilePicture src="/ProfilePicture.jpg" />
            <p className="text">
              I am a driven developer working at the VIA Lab. I posess a wide
              range of experience such as machine learning, robotics, web
              development and data visualization.
            </p>
          </div>
          <div style={{ display: "inline-block", width: "600px" }}>
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
                value="40%"
                skill="SQL"
                percentage="70%"
              />
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
                value="55%"
                skill="Java"
                percentage="85%"
              />
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
                value="40%"
                skill="MongoDB"
                percentage="70%"
              />
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
                value="45%"
                skill="Nodejs"
                percentage="75%"
              />
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
                value="55%"
                skill="Javascript"
                percentage="85%"
              />
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
                value="45%"
                skill="ML"
                percentage="75%"
              />
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
                skill="Python"
                percentage="80%"
              />
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
                skill="React"
                percentage="80%"
              />
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
                value="40%"
                skill="CSS"
                percentage="70%"
              />
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
                value="60%"
                skill="C++"
                percentage="90%"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BioPage;
