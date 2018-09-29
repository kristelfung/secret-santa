import React, { Component } from 'react';
import People from './People'
import AddPerson from './AddPerson'

class SecretSanta extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: ["Alice", "Bob", "Claire"]
        };
    }

    handleAddPersonParent = (name) => {
        this.setState((prevState) => {
            return {people: prevState.people.concat(name)}
        })
    }

    render() {
        return (
        <div>
            <h1>Parent Component</h1>
            <AddPerson handleAddPersonParent={this.handleAddPersonParent}/>
            <People people={this.state.people}/>
        </div>
        );
    }
}

export default SecretSanta;
