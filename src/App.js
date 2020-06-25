import React from 'react';
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableRow from "./components/TableRow";
import Header from "./components/Header";
import ButtonRow from "./components/ButtonRow";
import employees from "./employees.json";
import './App.css';

//store default state so that each filter uses the entire employees object
const defaultState = { employees };

class App extends React.Component {

  //setting this.state with defaultState
  state = defaultState;

  //reset table to default state ordered by id
  resetTable = () => {
    let resetArr = defaultState.employees.sort((a, b) => (a.id > b.id) ? 1 : -1);
    this.setState({ employees: resetArr });
  }

  //filter by department
  filterDepartment = e => {
    const department = e.target.name;
    const deptArr = defaultState.employees.filter(employee => employee.department === department);
    this.setState({ employees: deptArr });
  }

  //filter by role
  filterRole = e => {
    const role = e.target.name;
    let roleArr = defaultState.employees.filter(employee => employee.role === role);
    this.setState({ employees: roleArr });
  }

  //sort functions
  sortId = () => {
    let sortIdArr = this.state.employees.sort((a, b) => (a.id > b.id) ? 1 : -1);
    this.setState({ employees: sortIdArr });
  }

  sortFirstName = () => {
    let sortFirstNameArr = this.state.employees.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1);
    this.setState({ employees: sortFirstNameArr });
  }

  sortLastName = () => {
    let sortLastNameArr = this.state.employees.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1);
    this.setState({ employees: sortLastNameArr });
  }

  sortDepartment = () => {
    let sortDepartmentArr = this.state.employees.sort((a, b) => (a.department > b.department) ? 1 : -1);
    this.setState({ employees: sortDepartmentArr });
  }

  sortRole = () => {
    let sortRoleArr = this.state.employees.sort((a, b) => (a.role > b.role) ? 1 : -1);
    this.setState({ employees: sortRoleArr });
  }

  sortEmail = () => {
    let sortEmailArr = this.state.employees.sort((a, b) => (a.email > b.email) ? 1 : -1);
    this.setState({ employees: sortEmailArr });
  }

  render() {
    return (
      <Wrapper>
        <Header>
          Employee Directory
        </Header>
        <ButtonRow
          // handleClick={this.handleClick}
          filterDepartment={this.filterDepartment}

          //Roles
          filterRole={this.filterRole}

          //Sort
          sortId={this.sortId}
          sortFirstName={this.sortFirstName}
          sortLastName={this.sortLastName}
          sortDepartment={this.sortDepartment}
          sortRole={this.sortRole}
          sortEmail={this.sortEmail}

          //Reset form
          resetTable={this.resetTable}
        />
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
