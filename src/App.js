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

  //filter by department
  filterDepartment = event => {
    const department = event.target.name;
    console.log(department);
    const deptArr = this.state.employees.filter(employee => employee.department === department);
    this.setState({employees: deptArr});
  }
  
  //filter by role
  filterRole = event => {
    const role = event.target.name;
    let roleArr = this.state.employees.filter(employee => employee.role === role);
    this.setState({employees: roleArr});
  }

  //sort functions
  // sortCriteria = event => {
  //   const criteria = event.target.name;
  // }


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

  // sortOfficeExt = () => {
  //   let sortOfficeExtArr = this.state.employees.sort((a, b) => (a.office_ext - b.office_ext) ? 1 : -1);
  //   this.setState({employees: sortOfficeExtArr});
  // }

  // handleClick = event => {
  //   const eventData = event.target.id;
  //   console.log(eventData);
  //   return eventData;
  // }

  render() {
    return (
      <Wrapper 
      // handleClick={this.handleClick}
      filterDepartment={this.filterDepartment}

      //Roles
      filterRole={this.filterRole}

      //Sort
      resetForm={() => this.resetForm()}
      sortFirstName={() => this.sortFirstName()}
      sortLastName={() => this.sortLastName()}
      sortDepartment={() => this.sortDepartment()}
      sortRole={() => this.sortRole()}
      sortEmail={() => this.sortEmail()}
      sortOfficeExt={() => this.sortOfficeExt()}

      regionalman= "Regional Manger"
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
