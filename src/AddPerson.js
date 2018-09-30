import React, { Component } from 'react';

class AddPerson extends Component {
    handleAddPersonChild = (e) => {
        e.preventDefault();
        const trimName = e.target.elements.name.value.trim();
        this.props.handleAddPersonParent(trimName);
        document.getElementById("name-form").reset();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddPersonChild} id="name-form">
                    <input defaultValue="" type="text" name="name"/>
                    <button type="submit">Add</button>
                </form> 
            </div>
        )
    }
}

export default AddPerson;