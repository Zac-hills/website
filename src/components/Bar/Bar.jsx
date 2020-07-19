import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import handleViewport from "react-in-viewport";
import "./bar.css";

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  fuzzy(val, label) {
    if (!label) {
      return "";
    }
    if (val <= 65) {
      return "Novice";
    } else if (val < 80) {
      return "Intermediate";
    } else if (val >= 80) {
      return "Advanced";
    }
  }
  render() {
    return (
      <ProgressBar
        style={{
          margin: "0.5vmin",
          textAlign: "center",
          height: "2vmin",
          fontSize: "2vmin",
        }}
      >
        <ProgressBar variant="success" now={35} label={this.props.label} />
        <ProgressBar variant="warning" now={this.props.now - 45} />
        <ProgressBar
          variant="info"
          now={10}
          label={`${this.fuzzy(this.props.now, this.props.shouldLabel)}`}
        />
      </ProgressBar>
    );
  }
}

export default Bar;
