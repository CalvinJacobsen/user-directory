import React from "react";

function EmployeeTemplate (props) {

    return (
        <tr id={props.id}>
            <td><img alt={altTag} src={props.picture}></img></td>
            <td>{props.first} {props.last} </td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
        </tr>
    )

}

export default EmployeeTemplate;