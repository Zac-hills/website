import React, { Component } from "react";
import ArticlePage from "../Page/ArticlePage";
import Jumbotron from "react-bootstrap/Jumbotron";

class LeadLag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <image src={`${process.env.PUBLIC_URL}/leadlag-header.png`} style={{ width: "100%", height: "auto" }}>
            {" "}
          </image>
        </Jumbotron>
        <ArticlePage
          title="Lead Lag"
          text="The Lead Lag project is a data exploratory tool with a basis of the lead lag metric. The lead lag metric is used to calculate the offset of two frequency. "
        />
      </div>
    );
  }
}

export default LeadLag;
