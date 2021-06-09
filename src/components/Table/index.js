import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";
import './style.css'


class Search extends Component {
    state = {
        search: "",
        results: []
    };

    generateUsers = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchMovies(this.state.search);
    };







    render() {
        return(
            <div >

            </div >
        );
    };

}

export default Search;