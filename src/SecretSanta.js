import React, { Component } from 'react';
import People from './People';
import AddPerson from './AddPerson';
import Generate from './Generate';
import './css/styles.css';

class SecretSanta extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            santas: []
        };
    }

    shuffleArray(array) {
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
                    people: prevState.people.concat(name)
                }
            })
        }
        else {
            alert("error!")
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
        const santas = this.shuffleArray(newArray)

        this.setState(() => {
            return {
                santas: santas
            }
        })
    }

    render() {
        return (
        <div className="container">
            <div className="header">
                <h1>Parent Component</h1>
                <p className="subtitle">Subtitle here</p>
            </div>
            <Generate handleGenerate={this.handleGenerate}/>
            <AddPerson handleAddPersonParent={this.handleAddPersonParent}/>
            <People people={this.state.people} santas={this.state.santas} handleDeletePerson={this.handleDeletePerson}/>
        </div>
        );
    }
}

export default SecretSanta;
