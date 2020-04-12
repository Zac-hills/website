import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ACard from "../Card/Card";
import CardColumns from "react-bootstrap/CardColumns";
import "./projectpage.css";
import handleViewport from 'react-in-viewport';

class SProjectPage extends Component {
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
      <div id="projects" className="projectpage">
        <p className="title" style={{ paddingTop: "50px", ...this.getStyle() }}>
          Projects
        </p>
        <div
          style={{
            marginLeft: "5%",
            marginRight: "5%",
            paddingTop: "30px",
            paddingBottom: "30px"
          }}
        >
          <CardColumns
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <ACard cardWidth={this.props.cardWidth} cardHeight={this.props.cardHeight} title="test" imageName={process.env.PUBLIC_URL+"/leadlag.png"} text="testing" url="/Projects/LeadLa"/>
            <ACard cardWidth={this.props.cardWidth} cardHeight={this.props.cardHeight} title="test" imageName={process.env.PUBLIC_URL+"/leadlag.png"} text="testing" />
            <ACard cardWidth={this.props.cardWidth} cardHeight={this.props.cardHeight} title="test" imageName={process.env.PUBLIC_URL+"/leadlag.png"} text="testing" />
            <ACard cardWidth={this.props.cardWidth} cardHeight={this.props.cardHeight} title="test" imageName={process.env.PUBLIC_URL+"/leadlag.png"} text="testing" />
          </CardColumns>
        </div>
      </div>
    );
  }
}

const ProjectPage = handleViewport(SProjectPage, { rootMargin: '-1.0px' });

export default ProjectPage;
