import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Person extends Component {
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
                    : <a href={ "/?name=" + this.props.person + "&key=" + this.props.encryptString(this.props.santa)} className="person__link">Copy link</a>
                }
            </div>
        )
    }
}

export default Person;