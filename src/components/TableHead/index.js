import React from "react";
import "./style.css";


function TableHead() {
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Department</th>
                <th>Role</th>
                <th>Email</th>
                <th>Office Phone</th>
            </tr>
        </thead>
    )
}

export default TableHead;