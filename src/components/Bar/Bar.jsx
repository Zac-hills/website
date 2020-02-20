import React, { Component } from "react";
class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          height: this.props.height,
          width: "100%",
          backgroundColor: this.props.backgroundColor,
          display: "block",
          textAlign: "left"
        }}
      >
        <div
          style={{
            display: "inline-block",
            width: "20%",
            backgroundColor: this.props.labelColor,
            height: this.props.height
          }}
        ></div>
        <div
          style={{
            display: "inline-block",
            height: this.props.height,
            width: this.props.value,
            backgroundColor: this.props.color
          }}
        ></div>
      </div>
    );
  }
}

export default Bar;
