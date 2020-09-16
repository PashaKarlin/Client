import React, { useState } from 'react';
import axios from 'axios';


const UploadFile = ({films}) => {
    const [fileName, setFileName] = useState('')
    const [data, setData] = useState([])
    const [titles, setTitles] = useState([])
    const [releaseYears, setReleaseYears] = useState([])
    const [formats, setFormats] = useState([])
    const [stars, setStars] = useState([])
    const [posted, setPosted] = useState(false)

    const uploadFile = (e) => {
        const reader = new FileReader();
        setFileName(reader.fileName);
        reader.onload = handleFileLoad;
        reader.readAsText(e.target.files[0]);
    }

    const handleFileLoad = (event) => {
        setData(event.target.result.split('\n'));
    }

    const sortInArray = () => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].includes('Title: ')) {
                setTitles(titles.push(data[i].replace(/Title: /g, '').replace(/\r/g, '')))
            }
            if (data[i].includes('Release Year: ')) {
                setReleaseYears(releaseYears.push(data[i].replace(/Release Year: /g, '').replace(/\r/g, '')))
            }
            if (data[i].includes('Format: ')) {
                setFormats(formats.push(data[i].replace(/Format: /g, '').replace(/\r/g, '')))
            }
            if (data[i].includes('Stars: ')) {
                setStars(stars.push(data[i].replace(/Stars: /g, '').replace(/\r/g, '')))
            }
        }
        for (let i = 0; i < titles.length; i++) {
            postFilms(i);
        }
    }
    const postFilms = (i) => {
        
            axios.post(`http://ec2-18-216-40-193.us-east-2.compute.amazonaws.com:4000/api/films`, {
                title: titles[i],
                releaseYear: Number(releaseYears[i]),
                format: formats[i],
                stars: stars[i].split(', ').filter((star, index) => { return index === stars[i].split(', ').indexOf(star) })
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                            setPosted(true);
                })
        }

    


    return (
        <div >
            {!posted &&
                <div className="upload">
                    <input id="fileInput" type="file" name="file" className="chooseFile" onChange={(e) => { uploadFile(e) }} />
                    <p>{fileName}</p>
                    <button className="sendButton" onClick={() => { sortInArray() }}>send</button>
                </div>
            }

            {posted && <div>
                <button className="button" onClick={() => { window.location.reload() }}>
                    &times;
                </button>
                <p style={{ color: "black" }}>All movies with correct data was successfully added to the collection.</p>
            </div>}

        </div>
    )

}

export default UploadFile;