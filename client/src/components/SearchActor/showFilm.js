import React from 'react'
import Comp from './comp'

let ShowFilm = (props) => {

    return <Comp title={props.title}
        releaseYear={props.releaseYear}
        format={props.format}
        stars={[props.stars]} />

}
export default ShowFilm;

// title={this.state.arr.title}
//         releaseYear={this.state.arr.releaseYear}
//         format={this.state.arr.format}
//         stars={this.state.arr.stars}