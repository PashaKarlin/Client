import React,{useState} from 'react';
import Modal from 'react-modal'
import '../Button/Button.css'

Modal.setAppElement('#root')

let ModalComponent = () => {
    const [modalIsOpen,setmodalIsOpen] = useState(false)
    return(
        <div className = 'button_position'>
            <button className = {'button_like_google'} onClick ={() =>setmodalIsOpen(true)}>Open Modal </button>
            <Modal isOpen = {modalIsOpen} 
            onRequestClose = {() => setmodalIsOpen(false)}>
                <h2>Modal Title</h2>
                <p>Modal Body</p>
                <div>
                    <button onClick ={() => setmodalIsOpen(false) }>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default ModalComponent;