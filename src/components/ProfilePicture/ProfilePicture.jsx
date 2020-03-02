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
            width: "270px",
            height: "170px",
            objectFit: "none",
            objectPosition: "56% 20%",
            borderRadius: "10%"
          }}
          src={this.props.src}
        ></img>
      </div>
    );
  }
}

export default ProfilePicture;
