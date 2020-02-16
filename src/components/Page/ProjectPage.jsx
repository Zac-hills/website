import React, { Component } from 'react';
import Card from "../Card/Card.jsx";

class ProjectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Card width='500px' height='300px' text='testing the new card'/>
        </div> );
    }
}
 
export default ProjectPage;