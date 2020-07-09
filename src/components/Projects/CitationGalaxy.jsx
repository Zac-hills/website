import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Header from "../Header/Header";
import ProjectPage from "../Page/ProjectPage";
import { Redirect } from "react-router-dom";
class CitationGalaxy extends Component {
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
            src={`${process.env.PUBLIC_URL}/citation-galaxy.png`}
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
          <h2>Citation Galaxy</h2>
          <p className="article-text">
            Citation Galaxy is a web based tool to aid bibliometricians in their
            work. Bibliometrician's work is centered around how, where and when
            citations occur in academic texts. Their work is paramount to the
            understanding of where funding should be distributed to have the most
            impact. Their work is especially relevant in Canada because the
            government uses the funding as an economic stimulus.
          </p>
          <p className="article-text" style={{ marginTop: "100px" }}>
            The web based tool uses two different datasets{" "}
            <a href="https://pubmed.ncbi.nlm.nih.gov/">Pubmed</a> and{" "}
            <a href="https://www.erudit.org/en/">Erudit</a>. The Pubmed data was
            parsed using{" "}
            <a href="https://github.com/titipata/pubmed_parser">
              pubmed_parser
            </a>
            . Each text is broken down into two parts: the distance a word
            is from the nearest citation (in words), and the distance in sentences. The data is
            stored in a PostgreSQL database. Knowing the distance a word is
            relative to a citation allows for rules to be created. 
          </p>
          <p className="article-text" style={{ marginTop: "100px" }}>
            The rule page allows the user to create compound rules to find
            specific instances where they occur in text. For example, a user
            could create a simple rule where they would like to find all
            instances in the texts where the word cancer and heart occur within
            a distance of 2 sentences of a citation. The rules page supports
            several logical operators such as NOT, OR, and AND. These operators
            allow the users to create a complex set of rules in order to find
            the exact instances they are trying to find in the text. Users can
            create multiple rulesets to search for in the database. Each ruleset
            is assigned a color to help display what ruleset is triggered in
            specific areas of the text.
            <img
              src={`${process.env.PUBLIC_URL}/rules-page.png`}
              style={{
                width: "130%",
                height: "auto",
                float: "left",
                margin: "20px",
              }}
            ></img>
          </p>
          <p className="article-text" style={{ marginTop: "100px" }}>
            The home page is a visualization that denotes the amount of rules that are triggered in that specific area of text. For example,
            the visualization could denote that one of your rules triggers only in the first 15% of sentences in academic texts.
            The texts are organized into columns based on the year the paper was
            published. By sorting the texts into their year of publication users
            can start to see how the rules change over time.
            <img
              src={`${process.env.PUBLIC_URL}/overview-vis.png`}
              style={{
                width: "130%",
                height: "auto",
                float: "left",
                margin: "20px",
              }}
            ></img>
          </p>
          <p className="article-text" style={{ marginTop: "100px" }}>
            The papers view page is a more refined view into the occurences of
            the rules in specific papers. The users can analyze the text
            surrounding the rules.
            <img
              src={`${process.env.PUBLIC_URL}/papers-view.png`}
              style={{
                width: "130%",
                height: "auto",
                float: "left",
                margin: "20px",
              }}
            ></img>
          </p>
          <p className="article-text" style={{ marginTop: "100px" }}>
            Lastly, the export page allows the users to export the specific
            instances that triggered the rules allowing them to perform manual
            analysis on a more refined dataset.
          </p>
        </div>
        <ProjectPage cardWidth="400px" cardHeight="450px" />
      </div>
    );
  }
}
export default CitationGalaxy;
