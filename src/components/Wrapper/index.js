import React from "react";
import "./style.css";

function Wrapper(props) {

    // handleClick = e => {
        
    // }

    return (
        <div className="container">
            <header className="row">
                <h1 className="col text-center">Employee Directory</h1>
            </header>
            <div className="row">
                {/* <button className="btn btn-primary" onClick={props.filterDepartment} name={props.criteria} >
                Filter by Department
                </button> */}
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={props.sortFirstName} >First Name</button>
                        <button className="dropdown-item" onClick={props.sortLastName}>Last Name</button>
                        <button className="dropdown-item" onClick={props.sortDepartment}>Department</button>
                        <button className="dropdown-item" onClick={props.sortRole}>Role</button>
                        <button className="dropdown-item" onClick={props.sortEmail}>Email</button>
                        {/* <button className="dropdown-item" onClick={props.sortOfficeExt}>Office Ext</button> */}
                    </div>
                </div>


                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Find by Department
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" 
                        onClick={props.filterDepartment}  name="Management">Management</button>
                        <button className="dropdown-item" onClick={props.filterDepartment} name="Sales">Sales</button>
                        <button className="dropdown-item" onClick={props.filterDepartment} name="Accounting">Accounting</button>
                        <button className="dropdown-item" onClick={props.filterDepartment} name="Supplier Relations">Supplier Relations</button>
                        <button className="dropdown-item" onClick={props.filterDepartment} name="Quality Assurance">Quality Assurance</button>
                        <button className="dropdown-item" onClick={props.filterDepartment} name="Reception">Reception</button>
                        <button className="dropdown-item" onClick={props.filterDepartment} name="Customer Relations">Customer Relations</button>
                        <button className="dropdown-item" onClick={props.filterDepartment} name="Intern">Intern</button>
                        <button className="dropdown-item" onClick={props.filterDepartment} name="Warehouse">Warehouse</button>
                        <button className="dropdown-item" onClick={props.filterDepartment} department="Human Resources">Human Resources</button>
                        <button className="dropdown-item" onClick={props.resetForm}>Reset Table</button>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Find by Role
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={props.filterRole} name="Regional Manager">Regional Manager
                        </button>
                        <button className="dropdown-item" onClick={props.filterRole} name="Sales Lead">Sales Lead
                        </button>
                        <button className="dropdown-item" onClick={props.filterRole} name="Salesperson">Salesperson
                        </button>
                        <button className="dropdown-item" onClick={props.filterRole} name="Lead Accountant">Lead Accountant
                        </button>
                        <button className="dropdown-item" onClick={props.filterRole} name="Accountant">Accountant
                        </button>
                        <button className="dropdown-item" onClick={props.filterRole} name="Representative">Representative
                        </button>
                        <button className="dropdown-item" onClick={props.filterRole} name="That's Right">That's Right
                        </button>
                        <button className="dropdown-item" onClick={props.filterRole} name="Receptionist">Receptionist
                        </button>
                        <button className="dropdown-item" onClick={props.filterRole} name="Intern">Intern
                        </button>
                        <button className="dropdown-item" onClick={props.filterRole} name="Warehouse Manager">Warehouse Manager
                        </button>
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