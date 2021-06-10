import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";
import EmployeeTemplate from "./EmployeeTemplate";
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
        return (
            <Container>
                {(this.state.results).map((employee) =>
            
                    <EmployeeTemplate
                        id={employees.login.username}
                        picture={employees.picture.medium}
                        first={employees.name.first}
                        last={employees.name.last}
                        phone={employees.cell}
                        email={employees.email}
                    />

                )}
            </Container>
        );
    };

}

export default Search;