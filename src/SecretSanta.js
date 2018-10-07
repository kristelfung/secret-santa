import React, { Component } from 'react';
import People from './People';
import AddPerson from './AddPerson';
import Generate from './Generate';
import image from './images/santa.svg';
import './css/styles.css';

class SecretSanta extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            santas: []
        };
    }

    transformToArray(prmstr) {
        var params = {};
        var prmarr = prmstr.split("&");
        for ( var i = 0; i < prmarr.length; i++) {
            var tmparr = prmarr[i].split("=");
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
        if (name !== "" && this.state.people.indexOf(name) === -1) { // if not blank AND not in array already
            this.setState((prevState) => {
                return {
                    people: prevState.people.concat(name),
                    santas: []
                }
            })
        }
        else {
            alert("error!") // later change this
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
        const newArray = this.state.people.slice(); // copy array
        const santas = this.shuffleArray(newArray);

        this.setState(() => {
            return {
                santas: santas
            }
        })

        console.log(this.getSearchParameters());
    }

    render() {
        return (
        <div className="container">
            <div className="header">
                <img src={image} className="header__image" alt="santa-image"/>
                <h1>Secret Santa Generator</h1>
                <p className="subtitle">No email or signup!</p>
            </div>
            <Generate handleGenerate={this.handleGenerate}/>
            <AddPerson handleAddPersonParent={this.handleAddPersonParent}/>
            <People people={this.state.people} santas={this.state.santas} handleDeletePerson={this.handleDeletePerson}/>
        </div>
        );
    }
}

export default SecretSanta;
