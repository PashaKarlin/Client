import React from 'react';

let Comp = (props) => {

    return (
        <div>
            <p>{props.title}</p>
            <p>{props.releaseYear}</p>
            <p>{props.format}</p>
            <p>{props.stars}</p>
        </div>
    )
}

export default Comp;