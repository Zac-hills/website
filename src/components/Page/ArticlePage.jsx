import React, { Component } from "react";
import Footer from "../Footer/Footer";
class ArticlePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Footer />
        <div style={{ margin: "auto", width: "50%", marginTop:"10% " }}>
          <h2>{this.props.title}</h2>
          <p style={{
            fontSize: "21px", lineHeight: "32px", fontWeight: "400"}}>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default ArticlePage;
