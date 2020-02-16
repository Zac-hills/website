import * as React from 'react';
import "./Card.css";
 
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {skew:{x:0, y:0}};
    }
    onHover(){
        console.log(this.state.size);
    }
    onClick(){
        if(this.props.url !=null)
        {
           // location.href = this.props.url;
        }
        else{
            console.log("this card does not have url");
        }
    }
    componentDidMount(){
        this.setState({size:this.element.getBoundingClientRect()});
    }
    getSize(element){
        this.element=element;
    }
    render() { 
        return (<div onClick={this.onClick.bind(this)} onMouseOver={this.onHover.bind(this)} ref={this.getSize.bind(this)}className="card" style={{width: this.props.width, height: this.props.height, transform:`skew(${this.state.skew.x},${this.state.skew.y})`}}>
            <div style={{width:"100%", height:"80%", display:"block"}}>
                <img src={this.props.src}></img>
            </div>
            <div style={{width:"100%", height:"19%", display:"block"}}>
                <p style={{fontFamily: this.props.fontFamily, fontSize: this.props.fontSize}}>
                    {this.props.text}
                </p>
            </div>
        </div>);
    }
}
 
export default Card;