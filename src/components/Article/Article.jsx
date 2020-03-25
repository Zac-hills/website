import React, { Component } from "react";

class Article extends Component {
  state = { isFocused: false };
  render() {
      return (
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
        </div>
      );
  }
}

export default Article;
