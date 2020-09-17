import React, { useState } from 'react'
import axios from 'axios'
import ModalComponent from '../ModalComponent/ModalComponent'
import ShowFilm from './showFilm'



class SearchActor extends React.Component {
    state = {
        condition: false,
        arrayFilms: [], //Массив массивов c фильмами
        data: [],
        isArrEmpty: true,
        foundedFilms: [], // Найденные фильмы
        enteredStars: [], // Массив введённых звёзд
    }
    componentDidMount() {
        axios.get('http://ec2-18-216-40-193.us-east-2.compute.amazonaws.com:4000/api/films')
            .then(response => {
                // console.log(Object.values(response))
                this.setState({ data: [...Object.values(response)] });
                this.setState({ arrayFilms: [...this.state.data[0]] })
            })
    }
    change = (e) => {
        const { name, value } = e.target
        let arr = value.split(',')
        this.setState({ [name]: arr },()=>{
            console.log(this.state.enteredStars)
        })
    }

    findMovie = (e) => {
        const enteredStars = this.state;
        e.preventDefault();
        this.state.arrayFilms.map(film =>{
            for (let i=0;i<=film.stars.length;i++){
                for (let j=0;j<=enteredStars.length;j++){
                    if (film.stars[i] === enteredStars[j]){
                        console.log('founded')
                    }
                }
            }
            let films = [];
            films.push(film);
            this.setState({foundedFilms : [...films]},() => {
                this.consoleMessage();
            })
        })
        
    }
    handleChangeIsArrEmpty = (e) => {
        this.setState({ isArrEmpty: false })
    }
    consoleMessage = () => {
        console.log(this.state.foundedFilms)
    }

    render() {
        return (
            <div>
                <div>
                    Enter Actor Name
                    <input name='enteredStars'
                        value={this.state.enteredStars}
                        onChange={this.change}
                        required={true}
                    />
                </div>
                <button onClick={this.findMovie}>Find movie</button>
                <div>
                    {this.state.condition
                        ? <ModalComponent
                            nameOfModal={'Results'}
                            modalData={<ShowFilm
                                title={this.state.title}
                                releaseYear={this.state.arr[0].releaseYear}
                                format={this.state.arr[0].format}
                                stars={[this.state.arr[0].stars]} />} />
                        : <div />}

                </div>
            </div>
        );
    };
};

export default SearchActor;
