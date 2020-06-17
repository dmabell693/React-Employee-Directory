import React from "react";
import "./style.css";


function TableHead() {
    return (
        <thead className="thead-dark">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Department</th>
                <th scope="col">Role</th>
                <th scope="col">Email</th>
                <th scope="col">Office Phone</th>
            </tr>
        </thead>
    )
}

export default TableHead;