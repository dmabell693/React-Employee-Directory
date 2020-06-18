import React from "react";
import "./style.css";

function Wrapper(props) {
    return (
        <div className="container">
            <header className="row">
                <h1 className="col text-center">Employee Directory</h1>
            </header>
            <div className="row">
                {/* <button className="btn btn-primary" onClick={props.filterDepartment} datatype={props.criteria} >
                Filter by Department
                </button> */}
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={props.sortFirstName}>First Name</button>
                        <button className="dropdown-item" onClick={props.sortLastName}>Last Name</button>
                        <button className="dropdown-item" onClick={props.sortDepartment}>Department</button>
                        <button className="dropdown-item" onClick={props.sortRole}>Role</button>
                        <button className="dropdown-item" onClick={props.sortEmail}>Email</button>
                        <button className="dropdown-item" onClick={props.sortOfficeExt}>Office Ext</button>
                    </div>
                </div>


                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Find by Department
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={props.filterManagement}>Management</button>
                        <button className="dropdown-item" onClick={props.filterSales}>Sales</button>
                        <button className="dropdown-item" onClick={props.filterAccounting}>Accounting</button>
                        <button className="dropdown-item" onClick={props.filterSupplierRel}>Supplier Relations</button>
                        <button className="dropdown-item" onClick={props.filterQualityAss}>Quality Assurance</button>
                        <button className="dropdown-item" onClick={props.filterReception}>Reception</button>
                        <button className="dropdown-item" onClick={props.filterCustRel}>Customer Relations</button>
                        <button className="dropdown-item" onClick={props.filterIntern}>Intern</button>
                        <button className="dropdown-item" onClick={props.filterWarehouse}>Warehouse</button>
                        <button className="dropdown-item" onClick={props.filterHR}>Human Resources</button>
                        <button className="dropdown-item" onClick={props.resetForm}>Reset Table</button>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Find by Role
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={props.filterRegMan}>Regional Manager
                        </button>
                        <button className="dropdown-item" onClick={props.filterSalesLead}>Sales Lead
                        </button>
                        <button className="dropdown-item" onClick={props.filterSalesperson}>Salesperson
                        </button>
                        <button className="dropdown-item" onClick={props.filterLeadAccountant}>Lead Accountant
                        </button>
                        <button className="dropdown-item" onClick={props.filterAccountant}>Accountant
                        </button>
                        <button className="dropdown-item" onClick={props.filterRepresentative}>Representative
                        </button>
                        <button className="dropdown-item" onClick={props.filterThatsRight}>That's Right
                        </button>
                        <button className="dropdown-item" onClick={props.filterReceptionist}>Receptionist
                        </button>
                        <button className="dropdown-item" onClick={props.filterWarehouseManager}>Warehouse Manager
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