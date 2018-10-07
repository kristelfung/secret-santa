import React, { Component } from 'react';
import People from './People';
import AddPerson from './AddPerson';
import Generate from './Generate';
import Header from './Header';
import Note from './Note';
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

    stringToArray(str) {
        let stringToArray = [...Array(str.length)]
        const toNum = {
            a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
            l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
            u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
        }
        for (let i = 0; i < str.length; i++) {
            const letter = "" + str.charAt(i)
            stringToArray[i] = toNum[letter]
        }
        return stringToArray
    }

    // cipher(santa, reverse = false) {
    //     const shiftKey = process.env.REACT_APP_SHIFT_KEY;

    //     for (let i = 0; i < santa.length; i++) {
    //         const rotation = shiftKey[i % shiftKey.length]
    //     }
    // }

    handleAddPersonParent = (name) => {
        if (name === "") {
            alert("Please enter a name!");
        }
        else if (this.state.people.indexOf(name) !== -1) { // -1 means in array
            alert("You've already added this person!")
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
                    <Note name={this.state.params.name} mykey={this.state.params.key}/>
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
