import React from 'react'
import axios from 'axios'

class Form extends React.Component {
    state = {
        title: '',
        releaseYear: '',
        format: '',
        stars: []
    }
    componentDidUpdate() {
        console.log(this.state);
    }
    change = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    changeArr = (e) => {
        const { name, value } = e.target
        let arr = value.split(',')
        this.setState({ [name]: arr })
    }
    addform = (e) => {
        e.preventDefault();
        // let dataState = `{"title": "${this.state.title}", "releaseYear": "${this.state.releaseYear}","format":"${this.state.format}","stars": ${this.state.stars}}`
        console.log([...this.state.stars])
        // let dataState = {...this.state, "stars" :[...this.state.stars]}
        axios.post('http://localhost:4000/api/films/', {
            title: this.state.title,
            releaseYear: this.state.releaseYear,
            format: this.state.format,
            stars: [...this.state.stars]
        }).then(
            function (response) {
                if (response.status === 200) {
                    console.log('response')
                }
            }
        ).catch(
            function (error) {
                if (error.response.status === 404) {
                    console.log(error)
                };
            });

        // axios({
        //     type: 'GET',
        //     url: 'http://localhost:4000/api/films/',
        //     crossDomain: true,
        //     data: dataState,
        //     dataType: 'json',
        //     mode: 'same-origin',
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'object',
        //         'Access-Control-Allow-Credentials': true,
        //         "Access-Control-Allow-Methods": 'OPTIONS,GET,POST,DELETE',
        //         "Access-Control-Allow-Headers": "Origin, X-Requested-With,X-HTTP-Method-Override, Content-Type, Accept, Version, Authorization,X-XSRF-TOKEN, Content-Type"
        //     },
        //     withCredentials: true,
        //     credentials: 'same-origin'
        // }).then(response => {(console.log(response))})
    }
    render() {
        const { title, releaseYear, format, stars } = this.state
        return (
            <div>
                <form>
                    <div>
                        Title
                        <input name='title' value={title} onChange={this.change} required={true} />
                    </div>
                    <div>
                        Release Year
                        <input name='releaseYear' value={releaseYear} onChange={this.change} required={true} />
                    </div>
                    <div>
                        Format
                    <select name='format' value={format} onChange={this.change} required={true}>
                            <option value='Choose_your_format' selected>Choose your format</option>
                            <option value='VHS'>VHS</option>
                            <option value='DVD'>DVD</option>
                            <option value='Blue-ray'>Blue-ray</option>
                        </select>
                    </div>
                    <div>
                        Stars
                        <input name='stars' value={stars} onChange={this.changeArr} required={true} id={'entry'} />
                    </div>
                    <button onClick={this.addform}>Add Film</button>
                </form>
            </div>
        )
    }
};

export default Form;