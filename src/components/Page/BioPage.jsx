import React, { Component } from "react";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import ProgressBar from "react-bootstrap/ProgressBar";
import Bar from "../Bar/Bar";
import handleViewport from "react-in-viewport";

class BioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getStyle() {
    const { inViewport, enterCount } = this.props;
    //Fade in only the first time we enter the viewport
    if (inViewport && enterCount === 1) {
      return { WebkitTransition: "opacity 0.75s ease-in-out" };
    } else if (!inViewport && enterCount < 1) {
      return { WebkitTransition: "none", opacity: "0" };
    } else {
      return {};
    }
  }
  render() {
    return (
      <div id="bio">
        <p className="title" style={this.getStyle()}>
          BIO
        </p>
        <div className="backgroundcard">
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "inline-block",
              verticalAlign: "top",
              backgroundColor: "white",
              textAlign: "center",
              boxShadow:
                "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
            }}
          >
            <div
              style={{
                height: "300px",
                margin: "30px",
              }}
            >
              <ProfilePicture
                src={process.env.PUBLIC_URL + "/profilePicture.jpg"}
              />
              <p style={{ width: "100%", padding: "5px" }}>
                A full stack developer working at the{" "}
                <a href="http://vialab.science.uoit.ca/">VIA Lab</a>. I posess a
                wide range of experience such as machine learning, robotics, web
                development and data visualization.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "400px",
            }}
          >
            <div style={{ margin: "8%" }}>
              <Bar now={80} label={"C++"} shouldLabel={true} />
              <Bar now={80} label={"C#"} />
              <Bar now={80} label={"JS"} />
              <Bar now={80} label={"NodeJS"} />
              <Bar now={80} label={"ML"} />
              <Bar now={80} label={"CV"} />
              <Bar now={75} label={"Java"} shouldLabel={true} />
              <Bar now={75} label={"MongoDB"} />
              <Bar now={75} label={"SQL"} />
              <Bar now={70} label={"CSS"} shouldLabel={true} />
              <Bar now={70} label={"React"} />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div class="bio-div">
            <img
              class="bio-icon"
              src={process.env.PUBLIC_URL + "/code.svg"}
            ></img>
            <p>FrontEnd Solutions</p>
          </div>
          <div class="bio-div">
            <img
              class="bio-icon"
              src={process.env.PUBLIC_URL + "/database.svg"}
            ></img>
            <p>Database Solutions</p>
          </div>
          <div class="bio-div">
            <img
              class="bio-icon"
              src={process.env.PUBLIC_URL + "/process.svg"}
            ></img>
            <p>BackEnd Solutions</p>
          </div>
        </div>
      </div>
    );
  }
}

const BP = handleViewport(BioPage, { rootMargin: "-1.0px" });

export default BP;
