import { SystemState } from "../storeType"

export const getEmployeeListState = (state: SystemState) => { 
    return state.users.employees.employeesList }
