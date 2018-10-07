import React from 'react';
import image from "./images/santa.svg";

const Header = () => {
    return (
        <div className="container">
            <div className="header">
                <img src={image} className="header__image" alt="santa"/>
                <h1>Secret Santa Generator</h1>
                <p className="subtitle">No email or signup!</p>
            </div>
        </div>
    )
}

export default Header;