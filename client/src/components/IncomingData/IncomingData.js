import React from 'react'
import axios from 'axios'
import Item from './Item';
import './IncomingData.css'

class IncomingData extends React.Component {
    state = {
        data: [],
        arrayFilms: [],
        sorted: false,
        sortedArrayFilms: []
    };


    componentDidMount() {
        axios.get('http://ec2-18-216-40-193.us-east-2.compute.amazonaws.com:4000/api/films')
            .then(response => {
                this.setState({ data: Object.values(response) });
                this.setState({ arrayFilms: this.state.data[0] });
                // console.log(this.state.arrayFilms[1])
                let arr = [...this.state.data[0]].sort(this.compare)
                this.setState({ sortedArrayFilms: [...arr] })
            })
    }
    compare = (a, b) => {
        const A = a.title.toUpperCase();
        const B = b.title.toUpperCase();
        let comparison = 0;
        if (A > B) {
            comparison = 1;
        } else if (A < B) {
            comparison = -1;
        }
        return comparison;
    }


render() {
    return (
        <div>
            <div className='incoming_data_button_sort'>
                <button onClick={() => this.setState({ sorted: true }, () => { console.log(this.state.sorted) })}>
                    Sort By Alphabet
                    </button>
                <button onClick={() => this.setState({ sorted: false }, () => { console.log(this.state.sorted) })}>
                    Go Back
                    </button>
            </div>

            {this.state.sorted
                ? this.state.sortedArrayFilms.map(film => {
                    return (
                        <div>
                            <Item itemName={film} />
                        </div>
                    )
                })
                : this.state.arrayFilms.map(film => {
                    return (
                        <div>
                            <Item itemName={film} />
                        </div>
                    )
                })}
        </div>
    )
}
}
export default IncomingData;