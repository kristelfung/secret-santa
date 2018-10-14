import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Person extends Component {
    state = {
        copied: false,
        copytext: "Copy link"
    }

    showCopied = () => {
        this.setState({
            copytext: "Copied"
        })
        setTimeout(() => {
            this.setState({
                copytext: "Copy link"
            })
        }, 1000)
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
                    : <CopyToClipboard text={window.location.origin.toString() + "/?name=" + this.props.person + "&key=" + this.props.encryptString(this.props.santa)}
                        onCopy={() => this.setState({copied: true})}>
                        <button className="person__link" onClick={this.showCopied}>
                            {this.state.copytext}
                        </button>
                    </CopyToClipboard>
                }
            </div>
        )
    }
}

export default Person;