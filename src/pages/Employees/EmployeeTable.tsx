import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { SystemState } from "../../store/storeType";
import { editEmployee , removeEmployee  } from "../../store/users/actions";


export const EmployeeTable = () => {

  const employees : any = useSelector((state:SystemState) => state.users.employees.employeesList);
  const dispatch = useDispatch();
  console.log("helloemployees",employees)
  // const setPath  = (path :string)=> {
  //   history.push(path)
  // }
    return (
      <div>
          <div style={{float:'left',margin:'20px'}}>
            
          </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">DOB</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Gender</th>
              <th scope="col">lanugage</th>
            </tr>
          </thead>
          <tbody>
              {employees && employees.map((employee:any) =>
              <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.dob}</td>
              <td>{employee.state}</td>
              <td>{employee.city}</td>
              <td>{employee.gender}</td>
              <td>{employee.language}</td>
              <td className=" text-center" >
              
                <Link to={`/edit/${employee.id}`}>
                <button className="btn btn-primary">Edit</button>
                </Link>
                
              
                </td>
              <td style={{cursor:'pointer'}}><button className="btn btn-danger" onClick={() => dispatch(removeEmployee(employee))}>Delete</button></td> 
            </tr>
              )}
            
         </tbody>
        </table>
      </div>
    );
 
  
};

