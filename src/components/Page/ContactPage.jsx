import React, { Component } from "react";
import "./page.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="contact" id="contact">
        <p
          className="title"
          style={{ paddingTop: "50px", color: "white", marginTop: "0px" }}
        >
          Contact
        </p>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              className="formfield"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="message.."
              className="formfield"
              style={{ height: "220px" }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="formsubmit">
            Submit
          </Button>
        </Form>
        <div>
          <a href="zachary.hills@uoit.net">
            <img
              className="icon"
              src="/mail.png"
              width={64}
              height={64}
              style={{ left: "0%" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/zachary-hills-031333185/">
            <img
              className="icon"
              src="/linkedIn.png"
              width={64}
              height={64}
              style={{ left: "0%" }}
            />
          </a>
          <a href="https://github.com/Zac-hills">
            <img
              className="icon"
              src="github.png"
              width={64}
              height={64}
              style={{ left: "0%" }}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default ContactPage;
