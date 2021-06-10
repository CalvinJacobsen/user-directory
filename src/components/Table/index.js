import React, { useState, Component } from "react";
import { Container } from "../Grid";
import API from "../../utils/API";
import EmployeeTemplate from "./EmployeeTemplate";
import './style.css'


class Table extends Component {
    constructor(props) {
        super(props)

        this.state = {
            result: [],
            sorted: false,
        };

        this.handleNameSorting = this.handleNameSorting.bind(this)
    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        API.getUsers()
            .then(res => {

                this.setState({
                    result: res.data.results,
                })
            })
            .catch(err => console.log(err));
        console.log(this.state.results)
    };

    handleNameSorting() {
        if (this.state.sorted === false) {
            this.setState({
                sorted: true
            })
            console.log(this.state.sorted)
        } else {
            this.setState({
                sorted: false
            })
            console.log(this.state.sorted)
        }
    };



    render() {
        return (
            <>

                <table className="table table-striped">
                    <Container>
                        <thead>
                            <ul key="main-head">
                                <li className="tableKey imgKey" >Image</li>
                                {this.state.sorted ? 
                                <li className="tableKey nameKey" onClick={this.handleNameSorting} style={{color: 'blue'}}><u>Name⟰</u></li> 
                                : <li className="tableKey nameKey" onClick={this.handleNameSorting} style={{color: 'red'}}><u>Name⟱</u></li> }
                                <li className="tableKey emailKey">Email</li>
                                <li className="tableKey">Phone</li>

                            </ul>
                        </thead>
                    </Container>

                    <Container className="employees" >
                        {this.state.sorted
                            ? (this.state.result).sort((a, b) => a.name.first > b.name.first ? 1 : -1).map((employee) =>
                                <EmployeeTemplate
                                    id={employee.login.username}
                                    picture={employee.picture.medium}
                                    first={employee.name.first}
                                    last={employee.name.last}
                                    phone={employee.cell}
                                    email={employee.email}
                                />
                            )
                            : (this.state.result).sort((a, b) => a.name.first < b.name.first ? 1 : -1).map((employee) =>
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
};

export default Table;