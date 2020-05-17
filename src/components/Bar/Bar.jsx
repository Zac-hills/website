import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import handleViewport from "react-in-viewport";
import "./bar.css";

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ProgressBar
        style={{ margin: "10px", textAlign: "center", height: "30px" }}
      >
        <ProgressBar variant="success" now={35} label={this.props.label} />
        <ProgressBar variant="warning" now={this.props.now - 45} />
        <ProgressBar variant="info" now={10} label={`${this.props.now}%`} />
      </ProgressBar>
    );
  }
}

export default Bar;
