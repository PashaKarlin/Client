import React from 'react'
import Button from '../Button/Button'
import './Header.css'
import ModalComponent from '../ModalComponent/ModalComponent';
import Form from '../Form/Form';
import Uploader from '../Uploader/Uploader';
import DeleteForm from '../DeleteForm/DeleteForm';
import SearchTitle from '../SearchTitle/searchtitle';
import SearchActor from '../SearchActor/searchactor';


let Header = () => {
    return (
        <div className='header'>
            <div className='header_buttons'>
                <ModalComponent nameOfModal={'Add Film'} modalData={<Form />} />
                {/* <div className='button_position'>
                    <Button name={'Sort Film(Alphabet)'} />
                </div> */}
                <ModalComponent nameOfModal = 'Find a movie(name)'
                modalData = {<SearchTitle/>}/>
                {/* <ModalComponent nameOfModal = 'Find a movie(actor)'
                modalData = {<SearchActor/>}/> */}
                <ModalComponent nameOfModal='Delete Film' modalData ={<DeleteForm/>}/>
            </div>
            <div >
                <ModalComponent nameOfModal={'Upload File'} modalData={<Uploader />} />
            </div>




        </div>
    )
}

export default Header;