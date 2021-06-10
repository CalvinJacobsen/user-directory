import React from "react";

function EmployeeTemplate(props) {
    const imageName = props.first + "_" + props.last + "'s_Photo";

    return (
        <thead>
            <tr id={props.id}>
                <td><img alt={imageName} src={props.picture}></img></td>
                <td>{props.first} {props.last} </td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
            </tr>
        </thead>
    )

}

export default EmployeeTemplate;