import React from "react";
import Card from './Card.js'

const CardList = ({robots}) => {
    const cardArray = robots.map((value, index) => (
        <Card 
            key={robots[index].id}
            id={robots[index].id} 
            name ={robots[index].name} 
            email={robots[index].email}
            username={robots[index].username} />
    ))
    return cardArray
}

export default CardList;