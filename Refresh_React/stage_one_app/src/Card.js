import React from 'react';

const Card = (props) => {
    return (
        <div>
            <img alt="photo" src=""/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;