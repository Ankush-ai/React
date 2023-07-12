import { useState, useEffect } from 'react';
import axios from 'axios';
const UseEffectDemo3 = () => {
    const [employees, setEmployees] = useState([
    ])
    const addEmployee = () => {
        setEmployees([...employees, { empId: 6789, name: 'Sam', designation: 'TL' }]);
    };
    useEffect(() => {
        axios.get('.employess.json')
            .then(result =>
                setEmployees(result.data)
            )
    }, []);

    return (<>
        <table style={{ width: '60%' }} className='table'>
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
    </>)
}
export default UseEffectDemo3;
