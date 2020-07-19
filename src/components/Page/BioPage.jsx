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
        <div className="backgroundcard" style={this.getStyle()}>
          <div className="profile-div">
            <div
              style={{
                margin: "30px",
              }}
            >
              <ProfilePicture
                src={process.env.PUBLIC_URL + "/profilePicture.jpg"}
              />
              <p
                style={{
                  width: "100%",
                  padding: "5px",
                  textAlign: "left",
                  fontSize: "1vw",
                }}
              >
                I am a full stack developer working at the{" "}
                <a href="http://vialab.science.uoit.ca/">VIA Lab</a>. I have a
                passion for technology solutions and a never ending drive to
                learn new things. I have experience in a wide array of subjects
                such as machine learning, web development, database management,
                robotics, and data visualizations.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "50%",
              height: "100%",
            }}
          >
            <div style={{ margin: "8%" }}>
              <label style={{ margin: "10px", color: "white" }}>Advanced</label>
              <Bar now={80} label={"C++"} />
              <Bar now={80} label={"C#"} />
              <Bar now={80} label={"JS"} />
              <Bar now={80} label={"NodeJS"} />
              <Bar now={80} label={"ML"} />
              <Bar now={80} label={"WebGL"} />
              <Bar now={80} label={"CV"} />
              <label style={{ margin: "10px", color: "white" }}>
                Intermediate
              </label>
              <Bar now={75} label={"Java"} />
              <Bar now={75} label={"MongoDB"} />
              <Bar now={75} label={"SQL"} />
              <Bar now={70} label={"CSS"} />
              <Bar now={70} label={"React"} />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="bio-div" style={this.getStyle()}>
            <img
              className="bio-icon"
              src={process.env.PUBLIC_URL + "/code.svg"}
            ></img>
            <p>Front End Solutions</p>
          </div>
          <div className="bio-div" style={this.getStyle()}>
            <img
              className="bio-icon"
              src={process.env.PUBLIC_URL + "/database.svg"}
            ></img>
            <p>Database Solutions</p>
          </div>
          <div className="bio-div" style={this.getStyle()}>
            <img
              className="bio-icon"
              src={process.env.PUBLIC_URL + "/process.svg"}
            ></img>
            <p>Back End Solutions</p>
          </div>
        </div>
      </div>
    );
  }
}

const BP = handleViewport(BioPage, { rootMargin: "-1.0px" });

export default BP;
