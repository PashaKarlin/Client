import React from 'react'
import axios from 'axios'


class DeleteForm extends React.Component {
    state = {
        title: '',
        id: '',
        nameID: [],
        data: [],
        arrayFilms: []
    }
    componentDidMount() {
        axios.get('http://ec2-18-216-40-193.us-east-2.compute.amazonaws.com:4000/api/films')
            .then(response => {
                // console.log(Object.values(response))
                this.setState({ data: Object.values(response) });
                this.setState({ arrayFilms: this.state.data[0] });
            })
    }

    change = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    deleteFilm = (e) => {
        e.preventDefault();
        this.state.arrayFilms.map(film => {
            if (film.title === this.state.title) {
                this.setState({ id: film._id }, () => {
                    if (window.confirm('Are you sure?')) {
                        axios.delete(`http://ec2-18-216-40-193.us-east-2.compute.amazonaws.com:4000/api/films/${this.state.id}`)
                        .then(
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
                            this.setState({title:''})
                    }

                })
            }
        })

       
    }
    
    render() {
        const { title } = this.state
        return (
            <div>
                <form>
                    <div>
                        Title
                        <input name='title' value={title} onChange={this.change} required={true} />
                    </div>
                    <button onClick={this.deleteFilm}>Delete</button>
                </form>
            </div>
        )
    }
};

export default DeleteForm;