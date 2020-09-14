import React from 'react'
import './Uploader.css'



let Uploader = () => {
    let uploadFile = (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload = (e) => {
            console.warn(e.target.result)
            console.log(e.target.result)
        }
    }
    return (
        <div>
            <input type ='file' name = 'file' onChange = {(e)=>uploadFile(e)}/>
        </div>
    )
}


export default Uploader;