import React from 'react';

const Card = ({name, email, id, username}) => {
    return (
        <div className=' bg-light-grtceen dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="photo" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <h2>{username}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;