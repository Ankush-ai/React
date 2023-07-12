import React, { useState } from 'react';
import UseStateDemo3 from './UseStateDemo3';
const UseStateDemo2 = () => {
             const [employees,setEmployees] = useState([
               { empId: 1234, name: 'John', designation:'SE' },
               { empId: 4567, name: 'Tom', designation:'SSE'},
               { empId: 8910, name: 'Kevin',designation:'TA'}
             ])
             const addEmployee = () => {
                setEmployees([...employees, { empId:6789, name: 'Sam', designation:'TL' }]);
              };
            return (<>
                    <table style={{width:'60%'}} className='table'>
                         <thead className="thead-light">
                             <tr>
                                  <th>EmpID</th>
                                  <th>Name</th>
                                  <th>Designation</th>
                             </tr>
                         </thead>
                         <tbody>
                              {employees.map(employee => {
                                     return (<tr>
                                             <td>{employee.empId}</td>
                                             <td>{employee.name}</td>
                                             <td>{employee.designation}</td>
                                     </tr>)
                             })
                             }
                         </tbody>
                    </table>
                    <button onClick={addEmployee}>Add an Employee</button>
                    <UseStateDemo3/>
            </>)  
}
export default UseStateDemo2;
