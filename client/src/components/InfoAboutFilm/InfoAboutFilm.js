import React from 'react'

let Info = (props) => {
    return (
        <div>
            <div>Release Year: {props.releaseYear}</div>
            <div>Format :{props.format}</div>
            <div>Stars :{props.stars + ' '}</div>
        </div>
    )
}

export default Info;