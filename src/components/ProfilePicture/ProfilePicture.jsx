import React, { Component } from "react";
class ProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img
          style={{
            width: "55%",
            height: "auto",
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
