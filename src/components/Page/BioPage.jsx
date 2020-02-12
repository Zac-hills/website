import React, { Component } from "react";
import Footer from "../Footer/Footer";
import "./biopage.css";
import TextBlob from "../TextBlob/TextBlob";
import RenderWindow from "../RenderWindow/RenderWindow";

class BioPage extends Component {
  state = {};
  render() {
    return (
      <article className="contentfield">
        <RenderWindow />
        <Footer />
      </article>
    );
  }
}

export default BioPage;
