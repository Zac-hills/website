import React, { Component } from "react";
import Footer from "../Footer/Footer";
import "./page.css";
import TextBlob from "../TextBlob/TextBlob";
import RenderWindow from "../RenderWindow/RenderWindow";
import ProjectPage from "./ProjectPage";
import BioPage from "./BioPage";

class Page extends Component {
  state = {};
  render() {
    return (
      <article className="contentfield">
        <RenderWindow />
        <BioPage />
        <ProjectPage cardWidth="400px" cardHeight="400px" />
      </article>
    );
  }
}

export default Page;
