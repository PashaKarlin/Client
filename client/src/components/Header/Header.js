import React from 'react'
import Button from '../Button/Button'
import './Header.css'
import ModalComponent from '../ModalComponent/ModalComponent';
import Form from '../Form/Form';
import Uploader from '../Uploader/Uploader';


let Header = () => {
    return (
        <div className='header'>
            <div className='header_buttons'>
                <ModalComponent nameOfModal={'Add Film'} modalData={<Form />} />
                
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
            <div className='header_uploader'>
                <Uploader />
            </div>




        </div>
    )
}

export default Header;