import React, { Component } from "react";
import Card from "../Card/Card.jsx";
import "./projectpage.css";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="projects">
        <div>
          <h3 className="title">PROJECTS</h3>
        </div>
        <div className="grid">
          <Card
            src="/leadlag.png"
            width="500px"
            height="400px"
            text="An Exploratory Tool to determine Canada's academic landscape relative to the rest of the world."
          />
          <Card
            src="/visualmodel.png"
            width="500px"
            height="400px"
            text="A visualization of the spatial limitations for Convolutional Neural Networks."
          />
          <Card
            src="/textvisualization.png"
            width="500px"
            height="400px"
            text="A visualization of the features learned for Convolutional Neural Networks text analysis."
          />
          <Card
            src="/compound.png"
            width="500px"
            height="400px"
            text="A new approach for mobile passwords to increase the theoretical security."
          />
          <Card
            src="/visualmodel.png"
            width="500px"
            height="400px"
            text="A simulator that depicts the impact of electrical vehicles on the grid infrastructure for the town of Ajax."
          />
        </div>
      </div>
    );
  }
}

export default ProjectPage;
