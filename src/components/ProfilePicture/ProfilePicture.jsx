import React, { Component } from "react";
class ProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ height: "50%" }}>
        <img
          style={{
            height: "100%",
            objectFit: "scale-down",
            borderRadius: "5px",
            boxShadow: " 20px 20px 60px #c9c9c9, -20px -20px 60px #ffffff",
          }}
          src={this.props.src}
        ></img>
      </div>
    );
  }
}

export default ProfilePicture;
