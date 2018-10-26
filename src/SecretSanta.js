import React, { Component } from 'react';
import People from './People';
import AddPerson from './AddPerson';
import Generate from './Generate';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import aes from 'crypto-js/aes';
import cryptojs from 'crypto-js';
import './scss/styles.scss';

class SecretSanta extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            santas: [],
            copied: false,
            hidden: true,
            name: "",
            params: this.getSearchParameters()
        };
    }

    encryptString(string) {
        const key = process.env.REACT_APP_ENCRYPT_KEY
        return aes.encrypt(string, key)
    }

    decryptHash(hash) {
        const key = process.env.REACT_APP_ENCRYPT_KEY
        const plaintext = aes.decrypt(hash.toString(), key)
        return plaintext.toString(cryptojs.enc.Utf8)
    }

    // componentDidMount() {
    //     alert(this.encryptString("Hello"))
    //     alert(this.decryptHash("U2FsdGVkX1+g5B4VlIFKJYipn3g8Pvg+b3oX01DHG+U="))
    // }

    transformToArray(prmstr) {
        let params = {};
        let prmarr = prmstr.split("&");
        for ( let i = 0; i < prmarr.length; i++) {
            let tmparr = prmarr[i].split("=");
            params[tmparr[0]] = tmparr[1];
        }
        return params;
    }

    getSearchParameters() {
        let prmstr = window.location.search.substr(1);
        return prmstr !== null && prmstr !== "" ? this.transformToArray(prmstr) : {};
    }

    shuffleArray(array) { // Sattolo's algorithm
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    handleAddPersonParent = (name) => {
        name = name.toLowerCase();
        //console.log(name)
        if (name === "") {
            alert("Please enter a name!");
        }
        else if (this.state.people.indexOf(name) !== -1) { // -1 means in array
            alert("You've already added this person!")
        }
        else if (this.state.people.length + 1 > 2) {
            this.setState({
                hidden: true
            })
        }
        else { // if not blank AND not in array already
            this.setState((prevState) => {
                return {
                    people: prevState.people.concat(name),
                    santas: []
                }
            })
        }
    }

    handleDeletePerson = (name) => {
        this.setState((prevState) => {
            return {
                people: prevState.people.filter(item => item !== name)
            }
        })
    }

    handleGenerate = () => {
      if (this.state.people.length <= 2) {
        this.setState({
          hidden: false
        })
      }
        const newArray = this.state.people.slice(); // copy array
        const santas = this.shuffleArray(newArray);
        this.setState(() => {
            return {
                santas: santas
            }
        })
    }

    updateName = (event) => {
      this.setState({name: event.target.value, hidden: true})
      console.log(this.state.name)
    }


    render() {

      let generateErrorMessage;
      generateErrorMessage = (
          <p style={{color: "#d53743", fontSize: ".75rem", textAlign: "center", marginTop: "-.75rem"}}>You need at least 3 people to generate Secret Santas!</p>
        )

        if (this.state.params.name !== undefined) {
            return (
                <div className="container">
                    <Header/>
                    <Note name={this.state.params.name} mykey={this.state.params.key} decryptHash={this.decryptHash}/>
                </div>
            )
        }

        return (
        <div className="body-wrap">
            <div className="container wrap">
                <Header/>
                <Generate handleGenerate={this.handleGenerate}/>
                {!this.state.hidden ?
                  generateErrorMessage
                : null}
                <AddPerson
                  handleAddPersonParent={this.handleAddPersonParent}
                  updateName={this.updateName}
                  />
                <People
                  people={this.state.people}
                  santas={this.state.santas}
                  handleDeletePerson={this.handleDeletePerson}
                  encryptString={this.encryptString}
                />
            </div>
            <div className="container">
                <Footer/>
            </div>
        </div>
        );
    }
}

export default SecretSanta;
