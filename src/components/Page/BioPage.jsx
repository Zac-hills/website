import React, { Component } from "react";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import ProgressBar from "react-bootstrap/ProgressBar";
import Bar from "../Bar/Bar";
import handleViewport from 'react-in-viewport';

class BioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getStyle(){
    const { inViewport, enterCount } = this.props;
    //Fade in only the first time we enter the viewport
    if (inViewport && enterCount === 1) {
      return { WebkitTransition: 'opacity 0.75s ease-in-out' };
    } else if (!inViewport && enterCount < 1) {
      return { WebkitTransition: 'none', opacity: '0' };
    } else {
      return {};
    }
  }
  render() {
    return (
      <div id="bio">
        <p className="title" style={this.getStyle()}>BIO</p>
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
                "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
            }}
          >
            <div
              style={{
                height: "300px",
                margin: "30px"
              }}
            >
              <ProfilePicture src={process.env.PUBLIC_URL+"/profilePicture.jpg"} />
              <p style={{width:"100%", padding:"5px"}}>
                I am a driven developer working at the VIA Lab. I posess a wide
                range of experience such as machine learning, robotics, web
                development and data visualization.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "400px"
            }}
          >
            <div style={{ margin: "8%" }}>
              <Bar now={80} label={"C++"}/>
              <Bar now={75} label={"Java"}/>
              <Bar now={80} label={"C#"}/>
              <Bar now={80} label={"JS"}/>
              <Bar now={70} label={"CSS"}/>
              <Bar now={70} label={"React"}/>
              <Bar now={80} label={"NodeJS"}/>
              <Bar now={75} label={"MongoDB"}/>
              <Bar now={75} label={"SQL"}/>
              <Bar now={80} label={"ML"}/>
              <Bar now={80} label={"CV"}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const BP = handleViewport(BioPage, { rootMargin: '-1.0px' });

export default BP;
