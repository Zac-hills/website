import React, { Component } from "react";
class ProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img style={{width:"200px", height:"300px", objectFit:'none', objectPosition:'54% 20%'}} src={this.props.src}></img>
      </div>
    );
  }
}

export default ProfilePicture;
