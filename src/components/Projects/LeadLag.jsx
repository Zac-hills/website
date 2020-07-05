import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Header from "../Header/Header";
import ProjectPage from "../Page/ProjectPage";
import { Redirect } from "react-router-dom";
class LeadLag extends Component {
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
          <img
            src={`${process.env.PUBLIC_URL}/leadlag-header.png`}
            alt="leadlag-header"
            className="banner"
          ></img>
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
          <h2>Consilium Maps</h2>
          <p className="article-text">
            Consilium Maps is a data exploratory tool with a basis of the lead
            lag metric. The lead lag metric is used to calculate the offset of
            two frequency. The frequencies in this case is each countries paper
            output for each year that have the given keyword or phrase within.
            For example, the above picture shows a search result for the keyword
            spinach, the color for each country denotes how far ahead or behind
            that country is relative to Canada's output. The basis behind this
            tool is the dataset{" "}
            <a href="https://www.dimensions.ai/">Dimensions.AI</a>. The
            Dimensions data set has over 108 million papers with meta data such
            as authors, institution affiliation, funding, paper citations and
            patents.
          </p>
          <p className="article-text">
            The sheer size of the data presented a challenge, in order to load
            all of this data during run time we implemented a progressive loader
            that allows you to interact with the partially loaded data. The
            scrubber represents all of Canada's currently loaded data.
            <img
              src={`${process.env.PUBLIC_URL}/leadlag-scrubber.png`}
              style={{
                width: "50%",
                height: "auto",
                float: "left",
                margin: "20px",
                marginLeft: "-80px",
              }}
            ></img>
            This allows the user to gauge areas of interest. The scrubber can be
            resized which changes the selection size. The minimum amount of
            years that can be selected is 3 and the maximum is 10. Another
            feature that helps the user determine areas of interest is the event
            graphs.
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
        <ProjectPage cardWidth="400px" cardHeight="400px" />
      </div>
    );
  }
}

export default LeadLag;
