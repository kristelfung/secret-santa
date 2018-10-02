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
            <div className="form-wrap">
                <form onSubmit={this.handleAddPersonChild} id="name-form" className="form">
                    <input type="text" name="name"/>
                    <button type="submit" className="add">Add</button>
                </form> 
            </div>
        )
    }
}

export default AddPerson;