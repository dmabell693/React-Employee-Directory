import React from 'react';
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableRow from "./components/TableRow";
import TableRowHeader from "./components/TableRowHeader";
import Header from "./components/Header";
import ButtonRow from "./components/ButtonRow";
import Dropdown from "./components/Dropdown";
import DropdownItemButton from "./components/DropdownItemButton";
import ResetButton from "./components/ResetButton";
import employees from "./employees.json";
import './App.css';

//store default state so that each filter uses the entire employees object
const defaultState = { employees };

//grab key properties from employees
let employeesKeys = Object.keys(defaultState.employees[0]);
employeesKeys = employeesKeys
  .join(",")
  .replace(/_/gi, " ")
  .split(",")
  .map(s => s.substring(0, 1)
    .toUpperCase() + s.substring(1));

//create an array of all departments
let departments = defaultState.employees.map(employee => employee.department);
departments = departments.filter((item, index) => departments.indexOf(item) === index);

//create an array of all roles
let roles = defaultState.employees.map(employee => employee.role);
roles = roles.filter((item, index) => roles.indexOf(item) === index);

class App extends React.Component {

  //setting this.state with defaultState
  state = defaultState;

  //sort functions
  sortCriteria = e => {
    const criteria = e.target.name;
    console.log(criteria);
    let sortArr;
    switch (criteria) {
      case "First name":
        sortArr = this.state.employees.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1);
        break;
      case "Last name":
        sortArr = this.state.employees.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1);
        break;
      case "Department":
        sortArr = this.state.employees.sort((a, b) => (a.department > b.department) ? 1 : -1);
        break;
      case "Role":
        sortArr = this.state.employees.sort((a, b) => (a.role > b.role) ? 1 : -1);
        break;
      case "Email":
        sortArr = this.state.employees.sort((a, b) => (a.email > b.email) ? 1 : -1);
        break;
      default:
        sortArr = this.state.employees.sort((a, b) => (a.id > b.id) ? 1 : -1);
        break;
    }
    this.setState({ employees: sortArr });
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

  //reset table to default state ordered by id
  resetTable = () => {
    let resetArr = defaultState.employees.sort((a, b) => (a.id > b.id) ? 1 : -1);
    this.setState({ employees: resetArr });
  }

  render() {
    return (
      <Wrapper>
        <Header>
          Employee Directory
        </Header>
        <ButtonRow>
          <Dropdown type="Sort">
            {employeesKeys.map(key => (
              <DropdownItemButton
                key={key}
                name={key}
                function={this.sortCriteria}
              />
            ))}
          </Dropdown>
          <Dropdown type="Filter by Department">
            {departments.map(department => (
              <DropdownItemButton
                key={department}
                name={department}
                function={this.filterDepartment}
              />
            ))}
          </Dropdown>
          <Dropdown type="Filter by Role">
            {roles.map(role => (
              <DropdownItemButton
                key={role}
                name={role}
                function={this.filterRole}
              />
            ))}
          </Dropdown>
          <ResetButton resetTable={this.resetTable}>
            Reset Table
          </ResetButton>
        </ButtonRow>
        <Table>
          <TableHead>
            {employeesKeys.map(key => (
              <TableRowHeader
              key={key}
              name={key}
              />
            ))}
          </TableHead>
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