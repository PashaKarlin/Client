import React, { useState } from 'react'
import axios from 'axios'
import ModalComponent from '../ModalComponent/ModalComponent'
import ShowFilm from './showFilm'



class SearchTitle extends React.Component {
    state = {
        condition: false,
        title: '',
        arrayFilms: [],
        arr: [],
        isArrEmpty: true
    }
    componentDidMount() {
        axios.get('http://ec2-18-216-40-193.us-east-2.compute.amazonaws.com:4000/api/films')
            .then(response => {
                // console.log(Object.values(response))
                this.setState({ data: [...Object.values(response)] });
                this.setState({ arrayFilms: [...this.state.data[0]] });
            })
    }
    change = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    findMovie = (e) => {
        e.preventDefault();
        this.state.arrayFilms.map(film => {
            if (film.title === this.state.title) {
                let array = []
                array.push(film);
                this.setState({ arr: [...array] }, () => {
                    console.log(this.state.arr)
                    this.setState({ condition: 'Success' }, () => {
                        console.log(this.state.condition)
                    })
                })
                this.handleChangeIsArrEmpty();
            }
        })
    }
    handleChangeIsArrEmpty = (e) => {
        this.setState({ isArrEmpty: false })
    }


    render() {
        return (
            <div>
                <div>
                    Enter movie title
                    <input name='title'
                        value={this.state.title}
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

export default SearchTitle;
