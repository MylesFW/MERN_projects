import React, {Component} from 'react';

class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age_increase: this.props.age 
            // age cannot be changed in the .js only the front end.
            // because of this, state acts as a sort of Python Session. 
            // age_increase becomes a session item that is saved. while this.props.age is the data that is loaded into the page on render.
            // age_increase will be reflected in the front end just like session until the page is refreshed and it is returned to the initial data.
        };
    }

    ageIncrease = () => {
        this.setState({ age_increase: this.state.age_increase + 1 }); 
        // this.setState alters the "session information".
        // in this case taking the state, increasing it by 1 each time.
    }

    render() { 
        const {firstName, lastName, hair} = this.props
        return ( 
            <div>
                <h1>Name: {lastName}, {firstName} </h1> 
                {/* props cannot be changed. but instead displays the information given in the front end. */}
                <p>Age: {this.state.age_increase}</p>
                {/* this.state.age_increase is used instead of props because it is displaying the new "session" data
                    as props cannot be changed from here, it must call upon what it set the props too in this.state */}
                <p>Hair: {hair}</p>
                <button onClick={ this.ageIncrease }>Increase Age</button>
                {/* this.ageIncrease calls the ageIncrease function when clicked. */}
                <hr></hr>
            </div>
        );
    }
}

export default PersonCard;

