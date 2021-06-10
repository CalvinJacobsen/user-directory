import React, { Component } from "react";
import { Container } from "../Grid";
import API from "../../utils/API";
import EmployeeTemplate from "./EmployeeTemplate";
import Search from "./Search";
import './style.css'


class Table extends Component {

    state = {
        result: [],
        filteredResult: [],
        search: ""
    };

    componentDidMount() {
        this.getEmployees();
    }



    getEmployees = () => {
        API.getUsers()
            .then(res => {

                this.setState({
                    result: res.data.results,
                    filteredResult: res.data.results
                })
            })
            .catch(err => console.log(err));
            console.log(this.state.results)
    };



    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        console.log(value);
        console.log(name);

        let filter = (this.state.result).filter(employee => {
            if (value == employee.name.first) {

                return true;
            } else if (value == employee.name.last) {

                return true;
            }


        })

        this.setState({
            filteredResult: filter,
            [name]: value
        });
    };

    render() {
        return (
            <>
                <Search
                    handleInputChange={this.handleInputChange}
                    search={this.state.search}
                />

                <table className="table table-striped">
                    <thead>
                        <tr key="main-head">
                            <td scope="col">Image</td>
                            <td scope="col">Name</td>
                            <td scope="col">Phone</td>
                            <td scope="col">Email</td>
                        </tr>
                    </thead>

                    <Container className="employees" >
                        {(this.state.result).map((employee) =>

                            <EmployeeTemplate
                                id={employee.login.username}
                                picture={employee.picture.medium}
                                first={employee.name.first}
                                last={employee.name.last}
                                phone={employee.cell}
                                email={employee.email}
                            />

                        )}
                    </Container>
                </table>
            </>
        );
    };

}

export default Table;