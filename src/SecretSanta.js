import React, { Component } from 'react';
import People from './People'

class SecretSanta extends Component {
  constructor(props) {
    super(props)

    this.state = {
      people: ["Alice", "Bob", "Claire"]
    }
  }

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <People people={this.state.people}/>
      </div>
    );
  }
}

export default SecretSanta;
