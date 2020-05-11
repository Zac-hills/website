import React, { Component } from "react";
import ArticlePage from "../Page/ArticlePage";
import Jumbotron from "react-bootstrap/Jumbotron";
import Footer from "../Footer/Footer";
class LeadLag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <img src={`${process.env.PUBLIC_URL}/leadlag-header.png`} alt="leadlag-header" style={{ width: "100%", height: "auto" }}>
          </img>
        </Jumbotron>
        <Footer />
        <div style={{ margin: "auto", width: "50%", marginTop:"10% " }}>
          <h2>Lead Lag</h2>
          <p style={{
            fontSize: "21px", lineHeight: "32px", fontWeight: "400"}}>The Lead Lag project is a data exploratory tool with a basis of the lead lag metric. The lead lag metric is used to calculate the offset of two frequency.
            The frequencies in this case is each countries paper output for each year that have the given keyword or phrase within. For example, the above picture shows 
            a search result for the keyword spinach, the color for each country denotes how far ahead of behin that country is relative to Canada's output.
            The basis behind this tool is the dataset Dimensions.AI.
            The Dimensions data set has over 108 million papers with meta data such as authors, institution affiliation, funding, paper citations and patents.
            <img src={`${process.env.PUBLIC_URL}/leadlag.png`} style={{width:"30%", height:"auto", float:"right"}}></img>
            </p>
        </div>
      </div>
    );
  }
}

export default LeadLag;
