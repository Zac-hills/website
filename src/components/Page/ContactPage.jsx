import React, { Component } from "react";
import "./page.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import handleViewport from 'react-in-viewport';

class SContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getStyle(){
    const { inViewport, enterCount } = this.props;
    //Fade in only the first time we enter the viewport
    if (inViewport && enterCount === 1) {
      return { WebkitTransition: 'opacity 0.75s ease-in-out' };
    } else if (!inViewport && enterCount < 1) {
      return { WebkitTransition: 'none', opacity: '0' };
    } else {
      return {};
    }
  }
  render() {
    return (
      <div className="contact" id="contact">
        <p
          className="title"
          style={{ paddingTop: "50px", color: "white", marginTop: "0px", ...this.getStyle() }}
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
          <Button style={{margin:"20px"}} variant="primary" type="submit" className="formsubmit">
            Submit
          </Button>
        </Form>
        <div>
          <a href="zachary.hills@uoit.net">
            <img
              className="icon"
              src={process.env.PUBLIC_URL+"/mail.png"}
              width={64}
              height={64}
              style={{ left: "0%" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/zachary-hills-031333185/">
            <img
              className="icon"
              src={process.env.PUBLIC_URL+"/linkedIn.png"}
              width={64}
              height={64}
              style={{ left: "0%" }}
            />
          </a>
          <a href="https://github.com/Zac-hills">
            <img
              className="icon"
              src={process.env.PUBLIC_URL+"/github.png"}
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

const ContactPage = handleViewport(SContactPage, { rootMargin: '-1.0px' });

export default ContactPage;
