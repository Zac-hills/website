import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import handleViewport from 'react-in-viewport';
import "./bar.css"

class LabeledBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getStyle(){
    const { inViewport, enterCount } = this.props;
    //Fade in only the first time we enter the viewport
    if (inViewport && enterCount === 1) {
      return { WebkitTransition: 'all 3.0s ease-in-out', transform:'translateX(0%) scaleX(1)' };
    } else if (!inViewport && enterCount < 1) {
      return { WebkitTransition: 'none', transform:'translateX(-50%) scaleX(0)' };
    } else {
      return {};
    }
  }
  getLabelStyle(){
    const { inViewport, enterCount } = this.props;
    //Fade in only the first time we enter the viewport
    if (inViewport && enterCount === 1) {
      return { WebkitTransition: 'opacity 3.0s ease-in-out' };
    } else if (!inViewport && enterCount < 1) {
      return { WebkitTransition: 'none', opacity: '0' };
    } else {
      return {};
    }
  }
  render() {
    return (
      <ProgressBar style={{margin:"10px", textAlign:"center", height:"30px"}}>
          <ProgressBar variant="success" now={35} label={this.props.label} />
          <ProgressBar variant="warning" now={this.props.now-45} style={this.getStyle()}/>
          <ProgressBar variant="info" now={10} label={`${this.props.now}%`} style={this.getLabelStyle()} />
      </ProgressBar>
      );
  }
}

const Bar = handleViewport(LabeledBar, { rootMargin: '-1.0px' });

export default Bar;
