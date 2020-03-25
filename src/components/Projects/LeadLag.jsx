import React, { Component } from 'react';
import Article from "../Article/Article";
import Jumbotron from "react-bootstrap/Jumbotron";

class LeadLag extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div>
            <Jumbotron>
                <image src="" style={{width:"100%", height:"auto"}}> </image>
            </Jumbotron>
        <div style={{width:"700px", margin:"0 auto"}}>
            <Article title="Lead Lag" text="The Lead Lag project is a data exploratory tool with a basis of the lead lag metric. The lead lag metric is used to calculate the offset of two frequency. "/>
        </div> 
        </div> );
    }
}
 
export default LeadLag;