import React from 'react';
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableRow from "./components/TableRow";
import employees from "./employees.json";
import './App.css';


const defaultState = {
  employees: employees
}

class App extends React.Component {

  state = defaultState;

  // defaultState = {employees};

  resetForm = () => {
    this.setState(defaultState);
  }

  // filterDepartment = department => {
  //   let deptArr = this.state.employees.filter(employee => employee.department === department);
  //   this.setState({employees: deptArr});
  // }

  //filter by department functions
  filterManagement = () => {
    let manArr = this.state.employees.filter(employee => employee.department === "Management");
    this.setState({employees: manArr});
  }

  filterSales = () => {
    let salesArr = this.state.employees.filter(employee => employee.department === "Sales");
    this.setState({employees: salesArr});
  }

  filterAccounting = () => {
    let accArr = this.state.employees.filter(employee => employee.department === "Accounting");
    this.setState({employees: accArr});
  }

  filterSupplierRel = () => {
    let suppRelArr = this.state.employees.filter(employee => employee.department === "Supplier Relations");
    this.setState({employees: suppRelArr});
  }

  filterQualityAss = () => {
    let qualityAss = this.state.employees.filter(employee => employee.department === "Quality Assurance");
    this.setState({employees: qualityAss});
  }

  filterReception = () => {
    let recArr = this.state.employees.filter(employee => employee.department === "Reception");
    this.setState({employees: recArr});
  }

  filterCustRel = () => {
    let custRelArr = this.state.employees.filter(employee => employee.department === "Customer Relations");
    this.setState({employees: custRelArr});
  }

  filterIntern = () => {
    let internArr = this.state.employees.filter(employee => employee.department === "Intern");
    this.setState({employees: internArr});
  }

  filterWarehouse = () => {
    let warehouseArr = this.state.employees.filter(employee => employee.department === "Warehouse");
    this.setState({employees: warehouseArr});
  }

  filterHR = () => {
    let hrArr = this.state.employees.filter(employee => employee.department === "Human Resources");
    this.setState({employees: hrArr});
  }
  
  //filter by role functions
  filterRegMan = () => {
    let regManArr = this.state.employees.filter(employee => employee.role === "Regional Manager");
    this.setState({employees: regManArr});
  }

  filterSalesLead = () => {
    let salesLeadArr = this.state.employees.filter(employee => employee.role === "Sales Lead");
    this.setState({employees: salesLeadArr});
  }

  filterSalesperson = () => {
    let salespersonArr = this.state.employees.filter(employee => employee.role === "Salesperson");
    this.setState({employees: salespersonArr});
  }

  filterLeadAccountant = () => {
    let leadAccountantArr = this.state.employees.filter(employee => employee.role === "Lead Accountant");
    this.setState({employees: leadAccountantArr});
  }

  filterAccountant = () => {
    let accountantArr = this.state.employees.filter(employee => employee.role === "Accountant");
    this.setState({employees: accountantArr});
  }

  filterRepresentative = () => {
    let repArr = this.state.employees.filter(employee => employee.role === "Representative");
    this.setState({employees: repArr});
  }

  filterThatsRight = () => {
    let thatsRightArr = this.state.employees.filter(employee => employee.role === "That's Right");
    this.setState({employees: thatsRightArr});
  }

  filterReceptionist = () => {
    let receptionistArr = this.state.employees.filter(employee => employee.role === "Receptionist");
    this.setState({employees: receptionistArr});
  }

  filterWarehouseManager = () => {
    let wareManArr = this.state.employees.filter(employee => employee.role === "Warehouse Manager");
    this.setState({employees: wareManArr});
  }


  //sort functions
  sortFirstName = () => {
    let sortFirstNameArr = this.state.employees.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1);
    this.setState({employees: sortFirstNameArr});
  }

  sortLastName = () => {
    let sortLastNameArr = this.state.employees.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1);
    this.setState({employees: sortLastNameArr});
  }

  sortDepartment = () => {
    let sortDepartmentArr = this.state.employees.sort((a, b) => (a.department > b.department) ? 1 : -1);
    this.setState({employees: sortDepartmentArr});
  }

  sortRole = () => {
    let sortRoleArr = this.state.employees.sort((a, b) => (a.role > b.role) ? 1 : -1);
    this.setState({employees: sortRoleArr});
  }

  sortEmail = () => {
    let sortEmailArr = this.state.employees.sort((a, b) => (a.email > b.email) ? 1 : -1);
    this.setState({employees: sortEmailArr});
  }

  sortOfficeExt = () => {
    let sortOfficeExtArr = this.state.employees.sort((a, b) => (a.office_ext - b.office_ext) ? 1 : -1);
    this.setState({employees: sortOfficeExtArr});
  }

  render() {
    return (
      <Wrapper 
      // filterDepartment={() => this.filterDepartment(this.props.criteria)}
      //Departments
      filterManagement={() => this.filterManagement()}
      filterSales={() => this.filterSales()}
      filterAccounting={() => this.filterAccounting()}
      filterSupplierRel={() => this.filterSupplierRel()}
      filterQualityAss={() => this.filterQualityAss()}
      filterReception={() => this.filterReception()}
      filterCustRel={() => this.filterCustRel()}
      filterIntern={() => this.filterIntern()}
      filterWarehouse={() => this.filterWarehouse()}
      filterHR={() => this.filterHR()}

      //Roles
      filterRegMan={() => this.filterRegMan()}
      filterSalesLead={() => this.filterSalesLead()}
      filterSalesperson={() => this.filterSalesperson()}
      filterLeadAccountant={() => this.filterLeadAccountant()}
      filterAccountant={() => this.filterAccountant()}
      filterRepresentative={() => this.filterRepresentative()}
      filterThatsRight={() => this.filterThatsRight()}
      filterReceptionist={() => this.filterReceptionist()}
      filterWarehouseManager={() => this.filterWarehouseManager()}

      //Sort
      resetForm={() => this.resetForm()}
      sortFirstName={() => this.sortFirstName()}
      sortLastName={() => this.sortLastName()}
      sortDepartment={() => this.sortDepartment()}
      sortRole={() => this.sortRole()}
      sortEmail={() => this.sortEmail()}
      sortOfficeExt={() => this.sortOfficeExt()}
      >
        <Table>
          <TableHead />
          <TableBody>
            {this.state.employees.map(employee => (
              <TableRow
                key={employee.id}
                id={employee.id}
                first_name={employee.first_name}
                last_name={employee.last_name}
                department={employee.department}
                role={employee.role}
                email={employee.email}
                office_ext={employee.office_ext}
              />
            ))}
          </TableBody>
        </Table>
      </Wrapper>
    )
  }

}


export default App;
