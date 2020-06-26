import React from "react";
import "./style.css";

function ButtonRow(props) {

    return (
        <div className="row justify-content-center">
            {props.children}
        </div>
    )
}

export default ButtonRow;