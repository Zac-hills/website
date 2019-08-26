import React, { Component } from "react";

class Article extends Component {
  state = { isFocused: false };
  render() {
    if (this.state.isFocused) {
      return (
        <a href="">
          <button>{this.props.title}</button>
        </a>
      );
    } else {
      return <iframe src={this.props.url} />;
    }
  }
}

export default Article;
