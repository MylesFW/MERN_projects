import React, {Component} from 'react';

class PersonCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Name: {this.props.lastName}, {this.props.firstName} </h1>
                <p>Age: {this.props.age}</p>
                <p>Hair: {this.props.hair}</p>
                <h1></h1>
            </div>
        );
    }
}

export default PersonCard;
