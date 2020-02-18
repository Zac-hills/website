import React, { Component } from "react";
import Footer from "../Footer/Footer";
import "./biopage.css";
import TextBlob from "../TextBlob/TextBlob";
import RenderWindow from "../RenderWindow/RenderWindow";
import ProjectPage from "./ProjectPage";

class BioPage extends Component {
  state = {};
  render() {
    return (
      <article className="contentfield">
        <RenderWindow />
        <ProjectPage />
      </article>
    );
  }
}

export default BioPage;
