import React from 'react'
import axios from 'axios'
import Item from './Item';


class IncomingData extends React.Component {
    state = {
        data: [],
        arrayFilms: [],
    };
    
    componentDidMount() {
        axios.get('http://ec2-18-216-40-193.us-east-2.compute.amazonaws.com:4000/api/films')
            .then(response => {
                this.setState({ data: Object.values(response) });
                this.setState({ arrayFilms: this.state.data[0] });
                // console.log(this.state.arrayFilms[1])
            })
    }

    render() {
        return (
            <div>
                {this.state.arrayFilms.map(film => {
                    return (
                        <div>
                            <Item itemName={film}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default IncomingData;