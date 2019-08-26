import React, { Component } from "react";
import Footer from "../Footer/Footer";
import "./biopage.css";

class BioPage extends Component {
  state = {};
  render() {
    return (
      <article className="contentfield">
        <img
          className="profilepicture"
          src="/ProfilePicture.jpg"
          width={200}
          height={200}
        />
        <h1>Interests</h1>I would say my background is more centered around
        general programming. The task of picking a specific field is often
        difficult when you spend your time flipping from one topic to another.
        There is one topic that distinguishes itself from the other topics and
        that is tool design. The process of automating difficult or frequent
        mundane tasks is the reason I get out of bed in the morning.
        <hr />
        <h1>Education</h1>
        I have a Bachelors in Information Technology with a major in Game
        Development. During my bachelors my primary focus was to develop my
        skills as an engine developer. I found early on that I liked creating
        tools that would save time. I believe this fascination stems from the
        fact that the one commodity humans always need is time. Preceeding my
        bachelors I went on to pursure a Masters in Computer Science with a
        focus in Computer Vision. My previous background in game development
        built the foundation working with the GPU and images.
        <hr />
        <Footer />
      </article>
    );
  }
}

export default BioPage;
