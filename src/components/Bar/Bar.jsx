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
          display: "flex",
          textAlign: "left",
          margin: "10px",
          borderRadius: "8px"
        }}
      >
        <div
          style={{
            margin: "0px",
            display: "inline-block",
            width: "30%",
            backgroundColor: this.props.labelColor,
            height: this.props.height,
            textAlign: "center",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px"
          }}
        >
          <p
            style={{
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue("--text-color"),
              margin: "0px",
              padding: "0px"
            }}
          >
            <b>{this.props.skill}</b>
          </p>
        </div>
        <div
          style={{
            display: "inline-block",
            height: this.props.height,
            width: this.props.value,
            backgroundColor: this.props.color,
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px"
          }}
        ></div>
      </div>
    );
  }
}

export default Bar;
