import React from 'react';
import EmployeeCells from "./components/EmployeeCells";
import Table from "./components/Table";
import TableHead from "./components/TableHead";
import employees from "./employees.json";
import './App.css';

class App extends React.Component {

  state = {
    employees: employees
  }

  // {
  //   "id": 1,
  //   "first_name": "Michael",
  //   "last_name": "Scott",
  //   "department": "Management",
  //   "role": "Regional Manager",
  //   "email": "michaelscott@dundermifflin.com",
  //   "office_phone": "*1"
  // }

  render() {
    return (
      <Table>
        <TableHead />
        {this.state.employees.map(employee => (
          <EmployeeCells
            key={employee.id}
            id={employee.id}
            first_name={employee.first_name}
            last_name={employee.last_name}
            department={employee.department}
            role={employee.role}
            email={employee.email}
            office_phone={employee.office_phone}
          />
        ))}
      </Table>
    )
  }

}


export default App;
