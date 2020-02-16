import * as React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { transform: "skew(0deg,0deg)" };
  }

  onHover(e) {
    console.log(e);
    const maxSkew = 5;
    let x = this.state.size.x + this.state.size.width / 2;
    let y = this.state.size.y + this.state.size.height / 2;
    let xDiff = x - e.screenX;
    let yDiff = y - e.screenY;
    xDiff /= this.state.size.width / 2;
    yDiff /= this.state.size.height / 2;
    this.setState({
      transform: `skew(${Math.floor(xDiff * maxSkew)}deg,${Math.floor(
        yDiff * maxSkew
      )}deg)`
    });
  }
  onClick() {
    if (this.props.url != null) {
      // location.href = this.props.url;
    } else {
      console.log("this card does not have url");
    }
  }
  componentDidMount() {
    this.setState({ size: this.element.getBoundingClientRect() });
  }
  getSize(element) {
    this.element = element;
  }
  shouldComponentUpdate(nextProps) {
    return this.state.transform !== nextProps.transform;
  }
  render() {
    return (
      <div
        onClick={this.onClick.bind(this)}
        onMouseMove={this.onHover.bind(this)}
        ref={this.getSize.bind(this)}
        className="card"
        style={{
          width: this.props.width,
          height: this.props.height,
          transform: this.state.transform
        }}
      >
        <div style={{ width: "100%", height: "80%", display: "block" }}>
          <img src={this.props.src}></img>
        </div>
        <div style={{ width: "100%", height: "19%", display: "block" }}>
          <p
            style={{
              fontFamily: this.props.fontFamily,
              fontSize: this.props.fontSize
            }}
          >
            {this.props.text}
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
