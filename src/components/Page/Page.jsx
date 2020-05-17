import React, { Component } from "react";
import "./page.css";
import RenderWindow from "../RenderWindow/RenderWindow";

class Page extends Component {
  state = {};
  render() {
    return (
      <article className="contentfield">
        <RenderWindow />
      </article>
    );
  }
}

export default Page;
