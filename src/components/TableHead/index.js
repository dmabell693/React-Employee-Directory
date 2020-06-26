import React from "react";
import "./style.css";


function TableHead(props) {
    return (
        <thead className="thead-dark">
            <tr>
                {props.children}
            </tr>
        </thead>
    )
}

export default TableHead;