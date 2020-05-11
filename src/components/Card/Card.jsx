import * as React from "react";
//import "./Card.css";
import Card from "react-bootstrap/Card";
import handleViewport from 'react-in-viewport';
import {Link} from 'react-router-dom';

class SCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked:false };
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
 //onClick(){
 //  this.setState({ clicked: true });
 //}

  render() {
   //if(this.state.clicked){
   //  return (<Link to={this.props.url}/>)
   //}
    return (
      <Link to={this.props.url} style={{textDecoration:"none", color:"black"}}>
      <Card
          className="shadow"
          style={{
            width: this.props.cardWidth,
            height: this.props.cardHeight,
            cursor: "pointer",
            flex: 0,
            margin: "15px",
            ...this.getStyle()
          }}
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
      <Card.Text style={{ margin: "5px", textAlign:"left"}}>
        {this.props.text}
      </Card.Text>
    </Card.Body>
        </Card>
    </Link>
    );
  }
}
const ACard = handleViewport(SCard, { rootMargin: '-1.0px' });
export default ACard;
