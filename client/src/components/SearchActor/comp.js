import React from 'react';

let Comp = (props) => {
    
    return (
        <div>
            <div>
                Title: 
                {props.title}
            </div>
            <div>
                Release Year: 
                {props.releaseYear}
            </div>
            <div>
                Format: 
                {props.format}
            </div>
            <div>
                Stars: 
                {props.stars + ','}
            </div>
            
        </div>
    )
}

export default Comp;