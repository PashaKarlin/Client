import React from 'react'
import './Button.css'


const Button = (props) =>{
    return(
        <div>
            <button className = 'button_like_google' onClick = {props.buttonFunc}>{props.name}</button>
        </div>
    )
}
export default Button;