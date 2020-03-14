import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import "./projectpage.css";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="projects" className="projectpage">
        <p className="title" style={{ paddingTop: "50px" }}>
          Projects
        </p>
        <div
          style={{
            marginLeft: "5%",
            marginRight: "5%",
            paddingTop: "30px",
            paddingBottom: "30px"
          }}
        >
          <CardColumns
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Card
              className="shadow"
              style={{
                width: this.props.cardWidth,
                height: this.props.cardHeight,
                cursor: "pointer",
                flex: 0,
                margin: "15px"
              }}
            >
              <Card.Img
                variant="top"
                src="textvisualization.png"
                style={{ width: this.props.cardWidth, height: "60%" }}
              />
              <Card.Body>
                <Card.Title>
                  <b>Visual Linguistics</b>
                </Card.Title>
                <Card.Text style={{ margin: "5px" }}>
                  An explainable AI approach with a unique end goal. The goal of
                  this work is to visualize the learned weights over the text
                  input, providing insight into what the model thinks.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="shadow"
              style={{
                width: this.props.cardWidth,
                height: this.props.cardHeight,
                cursor: "pointer",
                flex: 0,
                margin: "15px"
              }}
            >
              <Card.Img
                variant="top"
                src="leadlag.png"
                style={{ width: this.props.cardWidth, height: "60%" }}
              />
              <Card.Body>
                <Card.Title>
                  <b>Lead Lag</b>
                </Card.Title>
                <Card.Text style={{ margin: "5px" }}>
                  A data exploratory tool with basis of depicting Canada's
                  academic landscape relative to the rest of the world.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="shadow"
              style={{
                width: this.props.cardWidth,
                height: this.props.cardHeight,
                cursor: "pointer",
                flex: 0,
                margin: "15px"
              }}
            >
              <Card.Img
                variant="top"
                src="visualmodel.png"
                style={{ width: this.props.cardWidth, height: "60%" }}
              />
              <Card.Body>
                <Card.Title>
                  <b>Lead Lag</b>
                </Card.Title>
                <Card.Text style={{ margin: "5px" }}>
                  A data exploratory tool with basis of depicting Canada's
                  academic landscape relative to the rest of the world.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="shadow"
              style={{
                width: this.props.cardWidth,
                height: this.props.cardHeight,
                cursor: "pointer",
                flex: 0,
                margin: "15px"
              }}
            >
              <Card.Img
                variant="top"
                src="leadlag.png"
                style={{ width: this.props.cardWidth, height: "60%" }}
              />
              <Card.Body>
                <Card.Title>
                  <b>Lead Lag</b>
                </Card.Title>
                <Card.Text style={{ margin: "5px" }}>
                  A data exploratory tool with basis of depicting Canada's
                  academic landscape relative to the rest of the world.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="shadow"
              style={{
                width: this.props.cardWidth,
                height: this.props.cardHeight,
                cursor: "pointer",
                flex: 0,
                margin: "15px"
              }}
            >
              <Card.Img
                variant="top"
                src="leadlag.png"
                style={{ width: this.props.cardWidth, height: "60%" }}
              />
              <Card.Body>
                <Card.Title>
                  <b>Lead Lag</b>
                </Card.Title>
                <Card.Text style={{ margin: "5px" }}>
                  A data exploratory tool with basis of depicting Canada's
                  academic landscape relative to the rest of the world.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
