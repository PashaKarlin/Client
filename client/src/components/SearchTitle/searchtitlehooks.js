import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ShowFilm from './showFilm'


let SearchTitle  = () => {
    
    const [title,setTitle] = useState('')
    const [data,setData] = useState([])
    const [arrayFilms,setArrayFilms] = useState([])
    const [arr, setArr] = useState([])
    const [empty, setEmpty] = useState(true);

    useEffect(() =>{
        axios.get('http://ec2-18-216-40-193.us-east-2.compute.amazonaws.com:4000/api/films')
        .then(response =>{
            const resData = Object.values(response)
            setData([...resData])
            setArrayFilms(data[0])
        })
    })
    // componentDidMount() {
    //     axios.get('http://ec2-18-216-40-193.us-east-2.compute.amazonaws.com:4000/api/films')
    //         .then(response => {
    //             // console.log(Object.values(response))
    //             this.setState({ data: Object.values(response) });
    //             this.setState({ arrayFilms: this.state.data[0] });
    //         })
    // }
    const Change = (e) => {
        const dynamicTitle = e.target.value
        setTitle(dynamicTitle)
    }
    const FindMovie = (e) => {
        e.preventDefault();
        this.state.arrayFilms.map(film => {
            if (film.title === title) {
                let array = []
                array.push(film);
                setArr([...array])
                console.log(arr)
                handleChangeIsArrEmpty();
            }
        })
    }
    const handleChangeIsArrEmpty = (e) => {
        setEmpty(false)
        console.log(empty)
    }

        return (
            <div>
                <div>
                    Enter movie title
                    <input name='title'
                        value={title}
                        onChange={() => Change}
                        required={true}
                    />
                </div>
                <button onClick={FindMovie}>Find movie</button>
                <div>
                    
                    <ShowFilm
                        isArrEmpty = {empty} 
                        title={title}
                        releaseYear={arr.releaseYear}
                        format={arr.format}
                        stars={arr.stars}
                    />
                </div>
            </div>
        )
}


export default SearchTitle;
