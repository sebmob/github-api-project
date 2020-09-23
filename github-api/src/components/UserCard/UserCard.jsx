import React from 'react'
import './UserCard.css';

function Usercard({ name, avatar, following, followers, bio, onButton }) {
    return (
        
        <div>
            <div className="div--card--container">
                <div className="div--header--container">
                    <img src={avatar} alt="Profile" className="img--avatar"/>
                    <h4 className="h4--name">{name}</h4>
                </div>
                <div className="div--text--container">
                    <p>Following: {following}</p>
                    <p>Followers: {followers}</p>
                    <p className="p--bio">{bio}</p>
                    <button onClick={onButton} className="button--stats">Repositories</button>
                </div>
            </div>
        </div>
    )
}

export default Usercard
