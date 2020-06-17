import React from "react";
import "./style.css";




function EmployeeCells(props) {
    return (
        <tbody>
            <tr>
                <td>{props.id}</td>
                <td>{props.first_name}</td>
                <td>{props.last_name}</td>
                <td>{props.department}</td>
                <td>{props.role}</td>
                <td>{props.email}</td>
                <td>{props.office_phone}</td>
            </tr>
        </tbody>
    )
}

export default EmployeeCells;