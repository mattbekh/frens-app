import React from 'react'
import Card from './Card'
import './CardList.css'

function CardList(props) {
    return (
        <div className="card-grid"> 
            {props.cardlist.map(card => {
                return <Card card={card} key={card.id}/>
            })}
        </div>
    )
}

export default CardList
