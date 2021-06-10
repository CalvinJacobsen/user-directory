import React from "react";

function EmployeeTemplate(props) {
    const imageName = props.first + "_" + props.last + "'s_Photo";

    return (
        <thead>
            <tr id={props.id}>
                <td className="listItem empProfileIMG"><img alt={imageName} src={props.picture}></img></td>
                <td className="listItem empName">{props.first} {props.last} </td>
                <td className="listItem empEmail">{props.email}</td>
                <td className="listItem empPhone">{props.phone}</td>
            </tr>
        </thead>
    )

}

export default EmployeeTemplate;