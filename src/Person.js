import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="person">
                <div className="person__number">
                    {this.props.number}
                </div>
                <p className="person__name">
                    {this.props.person}
                </p>
                {
                    (this.props.renderRemove === true)
                    ? <button className="person__remove" onClick={(e) => {this.props.handleDeletePerson(this.props.person)}}>
                        Remove
                    </button>
                    : <a href="" onClick={this.copyText} className="person__link">Copy link</a>
                }
            </div>
        )
    }
}

export default Person;