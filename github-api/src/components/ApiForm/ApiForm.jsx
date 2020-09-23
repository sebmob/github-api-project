import React from 'react'
import './ApiForm.css';

function ApiForm({ onSubmit, onChange }) {
    return (
        <div className="form--input--container">
            <form action="input" className="form--input" onSubmit={onSubmit} >
                <label>Find Github User</label><br></br>           
                <input className="input--text" type="text" placeholder="Search" onChange={onChange}/><br></br> 
                <input className="input--submit" type="submit" value="Submit"  />
            </form>
        </div>
    )
}

export default ApiForm
