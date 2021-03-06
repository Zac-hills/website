import React, { Component } from "react";
import "./page.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import handleViewport from "react-in-viewport";
import emailjs from "emailjs-com";

class SContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getStyle() {
    const { inViewport, enterCount } = this.props;
    //Fade in only the first time we enter the viewport
    if (inViewport && enterCount === 1) {
      return { WebkitTransition: "opacity 0.75s ease-in-out" };
    } else if (!inViewport && enterCount < 1) {
      return { WebkitTransition: "none", opacity: "0" };
    } else {
      return {};
    }
  }
  componentDidMount() {
    console.log("component mounted");
    emailjs.init("user_ZO3mBYY8RpFxXqV19WLmI");
  }
  onSubmit(submission) {
    const values = submission.currentTarget;
    console.log(values);
    emailjs
      .send("gmail", "template_HxjMScy6", {
        message_html: values[1].value,
        from_name: values[0].value,
      })
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }
  render() {
    return (
      <div className="contact" id="contact">
        <p
          className="title"
          style={{
            paddingTop: "50px",
            color: "white",
            marginTop: "0px",
            ...this.getStyle(),
          }}
        >
          Contact
        </p>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="your email - name@example.com"
              className="formfield"
              style={{ borderWidth: "0px" }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="message.."
              className="formfield"
              style={{ height: "15vh", borderWidth: "0px" }}
            />
          </Form.Group>
          <Button
            style={{ margin: "20px", borderWidth: "0px" }}
            variant="primary"
            type="submit"
            className="formsubmit"
          >
            Submit
          </Button>
        </Form>
        <div>
          <a href="https://www.linkedin.com/in/zachary-hills-031333185/">
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "/linkedIn.png"}
              width={64}
              height={64}
              style={{ left: "0%" }}
            />
          </a>
          <a href="https://github.com/Zac-hills">
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "/github.png"}
              width={64}
              height={64}
              style={{ left: "0%" }}
            />
          </a>
        </div>
        <div
          style={{ marginTop: "50px", textDecoration: "none", fontSize: "8px" }}
        >
          Icons made by{" "}
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="https://www.flaticon.com/authors/icongeek26"
            title="Icongeek26"
          >
            Icongeek26
          </a>{" "}
          from{" "}
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            www.flaticon.com
          </a>
        </div>
        <div style={{ textDecoration: "none", fontSize: "8px" }}>
          Icons made by{" "}
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="https://www.flaticon.com/authors/phatplus"
            title="phatplus"
          >
            phatplus
          </a>{" "}
          from{" "}
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            www.flaticon.com
          </a>
        </div>
      </div>
    );
  }
}

const ContactPage = handleViewport(SContactPage, { rootMargin: "-1.0px" });

export default ContactPage;
