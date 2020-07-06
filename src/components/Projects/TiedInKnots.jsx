import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Header from "../Header/Header";
import ProjectPage from "../Page/ProjectPage";
import { Redirect } from "react-router-dom";

class TiedInKnots extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }
  setRedirect(url) {
    this.setState({ redirect: true, redirectURL: url });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirectURL} />;
    }
    return (
      <div>
        <Jumbotron className="banner-container">
          <iframe
            className="banner"
            style={{ width: "100%" }}
            src="https://vialab.github.io/tied-in-knots/#/"
          ></iframe>
        </Jumbotron>
        <Header redirectCallback={this.setRedirect.bind(this)} />
        <div
          style={{
            margin: "auto",
            width: "50%",
            marginTop: "10% ",
            maxWidth: "800px",
          }}
        >
          <h2>Tied In Knots</h2>
          <p className="article-text">Tied in Knots is a</p>
          <p className="article-text">
            Tied in Knots is an interactive visualization
          </p>
          <p className="article-text" style={{ marginTop: "100px" }}>
            <img
              src={`${process.env.PUBLIC_URL}/leadlag-events.png`}
              style={{
                width: "50%",
                height: "auto",
                float: "right",
                margin: "20px",
                marginRight: "-180px",
              }}
            ></img>
            The event graphs inform the user which areas have the most lead,
            most lag, most amount of lead and lag.
          </p>
          <p className="article-text" style={{ marginTop: "100px" }}>
            Once a timespan is selected the user can now view individual
            institutions and their output relative to Canada.
            <img
              src={`${process.env.PUBLIC_URL}/leadlag-nodes.png`}
              style={{
                width: "50%",
                height: "auto",
                float: "right",
                margin: "20px",
                marginRight: "-80px",
              }}
            ></img>
            The nodes color is the amount of lead or lag the institution is
            relative to Canada. The line on the node depicts their output trend
            for the time span. If the line is moving up the institution's output
            has increased 5% or more.
          </p>
          <p className="article-text">
            The objective of Consilium Maps was to create a tool capable of
            informing our stake holders of how institutions are performing for
            certain concepts. Ultimately, we provided a tool that can depict how
            well institutions / countries are performing on a global scale for
            searched concepts.
          </p>
        </div>
        <ProjectPage cardWidth="400px" cardHeight="450px" />
      </div>
    );
  }
}
export default TiedInKnots;
