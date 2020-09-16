import React from 'react'
import './Item.css'
import ModalComponent from '../ModalComponent/ModalComponent'
import Info from '../InfoAboutFilm/InfoAboutFilm'


const Item =(props) => {
        return(
            <div className ='file_item'>
                {props.itemName.title}
                <div>
                    <ModalComponent
                        nameOfModal = 'Detail information'
                        modalData = {<Info releaseYear = {props.itemName.releaseYear}
                                            format = {props.itemName.format}
                                            stars = {props.itemName.stars}/>} 
                    />
                </div>
                
            </div>
        )
        
    };
    

    
export default Item;