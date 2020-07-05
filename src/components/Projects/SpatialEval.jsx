import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Header from "../Header/Header";
import ProjectPage from "../Page/ProjectPage";
import { Redirect } from "react-router-dom";

class SpatialEval extends Component {
  state = {};

  setRedirect(url) {
    this.setState({ redirect: true, redirectURL: url });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirectURL} />;
    }
    return (
      <div>
        <Jumbotron className="banner-container">
          <iframe
            className="banner"
            style={{ width: "100%" }}
            src="https://www.youtube.com/embed/4phJmMGCcCc?autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Jumbotron>
        <Header redirectCallback={this.setRedirect.bind(this)} />
        <div
          style={{
            margin: "auto",
            width: "50%",
            marginTop: "10% ",
            maxWidth: "800px",
          }}
        >
          <h2>
            Spatial Evaluation of Convolutional Neural Networks using UAVs
          </h2>
          <p className="article-text">
            Convolutional Neural Networks suffer from a lack of explaination
            when it comes to their use. The standard for depicting how good a
            convolutional neural network is based on the dataset that was used
            to train it. For example, this convolutional neural network has a
            92% accuracy using some dataset. In order for you to comprehend the
            convolutional neural networks capabilities you have to be an expert
            on the dataset used. Even if you are an expert, it still does not
            define how well the convolutional neural network will preform in a 3
            dimensional environment. For example, questions like at what
            distance does the network start to lose accuracy, what are the weak
            view points like the front or back of the object, and how well does
            the network preform when both the viewpoint and distance are
            dynamic.
          </p>
          <p className="article-text">
            This projects presents another approach to depicting the behaviour
            of a convolutional neural network. I am no stating that the previous
            approach is worse, it is the appropriate approach for debugging and
            training a network. The change in accuracy for a datasets depicts
            how your network topology changes are impacting the accuracy of the
            network. However, once the network is full trained and the
            parameters are tuned there must be a better way to help developers
            understand the limitations of the network.
            <img
              src={`${process.env.PUBLIC_URL}/spatial_visual.png`}
              style={{
                width: "50%",
                height: "auto",
                float: "left",
                margin: "20px",
                marginLeft: "-80px",
              }}
            ></img>
            This project uses unmanned aerial vehicles to circle the object
            logging the images and spatial data relative to the object. The
            result is a detailed visual analysis of the spatial limitations of
            the neural network. By providing the spatial limitations engineers
            who are looking to use the network will have a better understanding
            of how the network will perform making it easier for the engineers
            to make decisions. Take Tesla for example, they have two sets of
            models, one network for objects that are closer and another for
            further away objects, this is a perfect example of where
            understanding the spatial limitations is a neccessity.
          </p>
          <p className="article-text" style={{ marginTop: "100px" }}>
            The above image depicts a single distance from the object of 25
            meters, for a more detailed analysis it is crucial to have more than
            a single distance from the object. Below is an image that is a
            compression of multiple fly bys with a distance of 10, 15, 20, and
            25m from the object. The angle of incidence is represented, where
            the 0 degree is true north. The objects front is pointed to true
            north, it is important to keep track of asymmetrical objects
            relative position to true north.
            <img
              src={`${process.env.PUBLIC_URL}/visualmodel.PNG`}
              style={{
                width: "50%",
                height: "auto",
                float: "right",
                margin: "20px",
                marginRight: "-180px",
              }}
            ></img>
          </p>
          <p className="article-text" style={{ marginTop: "100px" }}>
            In conclusion this work is an approach to help engineers be informed
            about the spatial limitations of convolutional neural networks. The
            project uses data visualization to help aid in the understanding of
            the limitations, and uses an unmanned aerial vehicle to gather the
            spatial data.
          </p>
        </div>
        <ProjectPage cardWidth="400px" cardHeight="400px" />
      </div>
    );
  }
}

export default SpatialEval;
