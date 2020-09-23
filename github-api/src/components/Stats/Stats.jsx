import React from 'react'
import './Stats.css';


function Stats({ stats }) {
    return (
        <div>
            <h3 className="h3--repositories">Repositories</h3>
            <div className="div--repo--container">
                {stats.map((stat, i) => {
                return <div className="div--repo" key={i}>
                    <h4 id="repoName">{stat.name}</h4>
                    <p>{stat.description}</p>
                    <a href={stat.html_url}>Checkout repository</a>
                </div>})}
            </div>
            
        </div>
    )
}

export default Stats
