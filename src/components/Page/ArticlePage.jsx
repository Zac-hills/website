import React, { Component } from "react";
import Footer from "../Footer/Footer";
class ArticlePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Footer />
        <div style={{ margin: "auto", width: "50%" }}>
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default ArticlePage;
