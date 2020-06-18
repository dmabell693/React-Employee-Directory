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
  filterSales = () => {
    let salesArr = this.state.employees.filter(employee => employee.department === "Sales");
    this.setState({employees: salesArr});
  }
  
  filterRepresentative = () => {
    let repArr = this.state.employees.filter(employee => employee.role === "Representative");
    this.setState({employees: repArr});
  }

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
      filterSales={() => this.filterSales()}
      filterRepresentative={() => this.filterRepresentative()}
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
