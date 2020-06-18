import React from "react";
import "./style.css";

function Wrapper(props) {
    return (
        <div className="container">
            <div className="row">
                {/* <button className="btn btn-primary" onClick={props.filterDepartment} datatype={props.criteria} >
                Filter by Department
                </button> */}
                <div className="dropdown col">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort by:
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={props.sortFirstName}>First Name</button>
                    </div>
                </div>


                <div className="dropdown col">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter by Department
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={props.filterSales}>Sales</button>
                        <button className="dropdown-item" onClick={props.filterRepresentative}>Filter by Representative</button>
                        <button className="dropdown-item" onClick={props.resetForm}>Reset Form</button>
                    </div>
                </div>
            </div>

            <div className="row">
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper;