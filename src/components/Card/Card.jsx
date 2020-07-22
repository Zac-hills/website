import * as React from "react";
//import "./Card.css";
import Card from "react-bootstrap/Card";
import handleViewport from "react-in-viewport";
import { Redirect } from "react-router-dom";

class ACard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  onClick() {
    if (this.props.redirectCallback != null) {
      this.props.redirectCallback(this.props.url);
    }
  }

  render() {
    return (
      <Card
        className="shadow"
        style={{
          width: this.props.cardWidth,
          height: this.props.cardHeight,
          cursor: "pointer",
          flex: 0,
          margin: "15px",
          borderRadius: "2rem",
        }}
        onClick={this.onClick.bind(this)}
      >
        <Card.Img
          variant="top"
          src={this.props.imageName}
          style={{
            width: this.props.cardWidth,
            height: "50%",
            borderTopLeftRadius: "2rem",
            borderTopRightRadius: "2rem",
            objectFit: this.props.objectFit,
            backgroundColor: "white",
          }}
        />
        <Card.Body>
          <Card.Title
            style={{
              marginTop: "15px",
              display: "flex",
              justifyContent: "center",
              fontSize: "19.2px",
            }}
          >
            <b>{this.props.title}</b>
          </Card.Title>
          <Card.Text
            style={{
              margin: "0px",
              padding: "15px",
              textAlign: "left",
              fontSize: "19.2px",
            }}
          >
            {this.props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ACard;
