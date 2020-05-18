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
        }}
        onClick={this.onClick.bind(this)}
      >
        <Card.Img
          variant="top"
          src={this.props.imageName}
          style={{ width: this.props.cardWidth, height: "60%" }}
        />
        <Card.Body>
          <Card.Title>
            <b>{this.props.title}</b>
          </Card.Title>
          <Card.Text style={{ margin: "5px", textAlign: "left" }}>
            {this.props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ACard;
