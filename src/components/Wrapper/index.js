import React from "react";
import "./style.css";

function Wrapper(props) {
    return (
        <div className="container">

            {/* <button className="btn btn-primary" onClick={props.filterDepartment} datatype={props.criteria} >
                Filter by Department
            </button> */}
            {/* <button className="btn btn-primary" onClick={props.filterSales}>
                Filter by Sales
            </button>
            <button className="btn btn-primary" onClick={props.filterRepresentative}>
                Filter by Representative
            </button> */}

            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" onClick={props.filterSales}>Filter by Sales</button>
                    <button className="dropdown-item" onClick={props.filterRepresentative}>Filter by Representative</button>
                    <button className="dropdown-item" onClick={props.resetForm}>Reset Form</button>
                </div>
            </div>

            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper;