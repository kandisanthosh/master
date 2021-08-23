import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import {
  setEmployeeList,
  editEmployee,
  removeEmployee,
} from "../../store/users/actions";
import { SystemState } from "../../store/storeType";
import { getUserList } from "../../services/getUserList";
import { EmployeeTable } from "./EmployeeTable";

export const EmployeeList = () => {
  const dispatch = useDispatch();
  const [employeesData, setEmployeesData] = useState({
    data: [],
    loader: false,
  });
  const employees: any = useSelector((state: SystemState) => state.users.employees.employeesList);
  const fetchEmployees = async () => {
    dispatch(getUserList(setEmployeesData));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <>
       <Link to="/register"><button className="btn btn-secondary">Add Employee</button></Link> 
      {employeesData.loader ? <p>Loading</p>:<EmployeeTable />}
      
    </>
  );
};
