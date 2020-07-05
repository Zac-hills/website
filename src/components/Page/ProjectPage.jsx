import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ACard from "../Card/Card";
import CardColumns from "react-bootstrap/CardColumns";
import "./projectpage.css";
import handleViewport from "react-in-viewport";
import { Redirect, useLocation } from "react-router-dom";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }
  /**
   *
   * @param {string} url
   */
  setRedirect(url) {
    this.setState({ redirectURL: url, redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirectURL} />;
    }
    return (
      <div id="projects" className="projectpage">
        <p className="title" style={{ paddingTop: "50px" }}>
          Projects
        </p>
        <div
          style={{
            marginLeft: "5%",
            marginRight: "5%",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <CardColumns
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ACard
              cardWidth={this.props.cardWidth}
              cardHeight={this.props.cardHeight}
              redirectCallback={this.setRedirect.bind(this)}
              title="Consilium Maps"
              imageName={process.env.PUBLIC_URL + "/leadlag.png"}
              text="A web application that determines Canada's academic standing in comparison to the rest of the world based on given keywords."
              url="/Projects/LeadLag"
            />
            <ACard
              cardWidth={this.props.cardWidth}
              cardHeight={this.props.cardHeight}
              redirectCallback={this.setRedirect.bind(this)}
              title="Spatial Evaluation"
              imageName={process.env.PUBLIC_URL + "/visualmodel.PNG"}
              text="An application that evaluates the spatial limitations for Convolutional Neural Networks through the use of Unmanned Aerial Vehicles."
              url="/Projects/SpatialEval"
            />
            <ACard
              cardWidth={this.props.cardWidth}
              cardHeight={this.props.cardHeight}
              redirectCallback={this.setRedirect.bind(this)}
              title="Citation Galaxy"
              imageName={process.env.PUBLIC_URL + "/citation-galaxy.png"}
              text="A web based tool to aid in the pursuit of understanding how, where and when citations occur. Features text analysis tools and the ability to export data."
              url="/Projects/CitationGalaxy"
            />
            <ACard
              cardWidth={this.props.cardWidth}
              cardHeight={this.props.cardHeight}
              redirectCallback={this.setRedirect.bind(this)}
              title="Tied in Knots"
              imageName={process.env.PUBLIC_URL + "/tied-in-knots.png"}
              text="Tied in Knots is a visualization tool to aid the exploration and understanding of sexual assaults in an academic environment. With the main objective of maintaining individual accounts."
              url="/Projects/TiedInKnots"
            />
          </CardColumns>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
