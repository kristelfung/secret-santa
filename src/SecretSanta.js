import React, { Component } from 'react';
import People from './People';
import AddPerson from './AddPerson';
import Generate from './Generate';
import Header from './Header';
import './css/styles.css';

class SecretSanta extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            santas: [],
            params: this.getSearchParameters()
        };
    }

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
    }

    render() {
        if (this.state.params.name !== undefined) {
            return (
                <div className="container">
                    <Header/>
                    <h1>Hi {this.state.params.name}</h1>
                </div>
            )
        }

        return (
        <div className="container">
            <Header/>
            <Generate handleGenerate={this.handleGenerate}/>
            <AddPerson handleAddPersonParent={this.handleAddPersonParent}/>
            <People people={this.state.people} santas={this.state.santas} handleDeletePerson={this.handleDeletePerson}/>
        </div>
        );
    }
}

export default SecretSanta;
