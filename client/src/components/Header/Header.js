import React from 'react'
import Button from '../Button/Button'
import './Header.css'


let Header = () => {
    return (
        <div className='header'>
            <div className='button_position'>
                <Button name={'Add Film'} />
            </div>
            <div className='button_position'>
                <Button name={'Sort Film(Alphabet)'} />
            </div>
            <div className='button_position'>
                <Button name={'Find a movie(name)'} />
            </div>
            <div className='button_position'>
                <Button name={'Find a movie(actor)'} />
            </div>
        </div>
    )
}

export default Header;