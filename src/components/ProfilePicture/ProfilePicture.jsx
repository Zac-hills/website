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
            borderRadius:"5px"
            //objectFit: "none",
            //objectPosition: "56% 20%",
          }}
          src={this.props.src}
        ></img>
      </div>
    );
  }
}

export default ProfilePicture;
