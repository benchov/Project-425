import React  from "react";
import './hello.css'


const Hello = (props) => {
        return (
            <div className='f1 tc'>
                <h1>Osu {props.name}</h1>    
                <p>test text</p>        
            </div>
        )
}

export default Hello

