import React, { Component } from 'react';
import Person from './Person';

class People extends Component {
    renderRemove = () => {
        if (this.props.santas.length > 0) {
            return false
        }
        else {
            return true
        }
    }

    render() {
        return (
            <div className="people-container">
                {
                    (this.props.people.length > 0)
                    ? this.props.people.map((person, index) =>
                        <Person person={person} 
                            key={person}
                            santa={this.props.santas[index]} 
                            number={index + 1} 
                            handleDeletePerson={this.props.handleDeletePerson}
                            renderRemove={this.renderRemove()}
                            encryptString={this.props.encryptString}
                            copyText={this.props.copyText}
                        /> // pass down name
                    )
                    : <p className="empty-message">Add a person to get started!</p>
                }
                
            </div>
        )
    }
}

export default People;