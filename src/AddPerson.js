import React, { Component } from 'react';

class AddPerson extends Component {
    handleAddPersonChild = (e) => {
        e.preventDefault();
        const trimName = e.target.elements.name.value.trim();
        this.props.handleAddPersonParent(trimName);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddPersonChild}>
                    <input type="text" name="name"/>
                    <button type="submit">Add</button>
                </form> 
            </div>
        )
    }
}

export default AddPerson;