import "./textblob.css"
import React, { Component } from 'react';

class TextBlob extends Component {
    state = {  }
    render() {
        const color1 = getComputedStyle(document.documentElement).getPropertyValue('--foreground-color1');
        const color2 = getComputedStyle(document.documentElement).getPropertyValue('--foreground-color2');
        let currentColor = color1;
        if(this.props.isColor)
        {
            currentColor = color2;
        }
        return (

            <div className="textbox" style={{width:this.props.width, height:this.props.height, backgroundColor:currentColor, position:'relative',left: this.props.left, right: this.props.right}}>
                <h1 style={{padding:this.props.padding}}>{this.props.title}</h1>
                <p style={{padding:this.props.padding, textAlign:'left'}}>
                    {this.props.text}
                </p>
            </div>
        );
    }
}

export default TextBlob;