import React from 'react'
import '../styles/card.css'


function Card({total, icon, name}) {
    const cardClass = `card ${name}`
    return (
        <article className={cardClass}>
            <p className="card-title">
                <img src= {icon}/>
            </p>
            <p className="card-followers">
            <span className="card-followers-number">{total}</span>
                <span className="card-followers-title">{name}</span>
            </p>    
        </article>
    )
}

export default Card;