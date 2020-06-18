import React from 'react';
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableRow from "./components/TableRow";
import employees from "./employees.json";
import './App.css';

class App extends React.Component {

  state = {
    employees: employees
  }

  filterSales = () => {
    let salesArr = this.state.employees.filter(employee => employee.department === "Sales");
    this.setState({employees: salesArr});
  }
  

  render() {
    return (
      <Wrapper 
      filterSales={() => this.filterSales()}

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
                office_phone={employee.office_phone}
              />
            ))}
          </TableBody>
        </Table>
      </Wrapper>
    )
  }

}


export default App;
