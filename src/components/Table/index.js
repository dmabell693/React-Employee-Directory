import React from "react";
import "./style.css";

function Table(props) {
    return (
        <div className="container">
            <table className="table table-striped bordered hover">{props.children}</table>
        </div>
    )
}

export default Table;