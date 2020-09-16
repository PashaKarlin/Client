import React,{useState} from 'react';
import Modal from 'react-modal'
import '../Button/Button.css'

Modal.setAppElement('#root')

let ModalComponent = (props) => {
    const [modalIsOpen,setmodalIsOpen] = useState(false)
    
    return(
        <div className = 'button_position'>
            <button className = 'button_like_google' onClick ={() =>setmodalIsOpen(true)}>{props.nameOfModal} </button>
            <Modal isOpen = {modalIsOpen} 
            onRequestClose = {() => setmodalIsOpen(false)} className = 'modal_window'>
                <h2>{props.nameOfModal}</h2>
                <div>
                    <div>{props.modalData}</div>
                    <button onClick ={() => setmodalIsOpen(false) }>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default ModalComponent;