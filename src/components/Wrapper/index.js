import React from "react";
import "./style.css";

function Wrapper(props) {
    return (
        <div className="container">

            <button className="btn btn-primary" onClick={props.filterSales}>
                Filter by Sales
            </button>

            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper;