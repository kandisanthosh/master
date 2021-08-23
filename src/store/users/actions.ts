import { SET_USER_LIST_ACTION, REMOVE_USER_LIST_ACTION , EDIT_USER_LIST_ACTION} from './actionTypes'

export const setEmployeeList = (data :any = [],loader :boolean = false) =>{
    return {
        type: SET_USER_LIST_ACTION,
            payload: {
                employees: data,
                loader: loader
            }
    }
}
export const editEmployee = (employee:any) => {
return{
    type : EDIT_USER_LIST_ACTION,
    payload: employee
}
}
export const removeEmployee = (employee:any) =>{
return{
    type: REMOVE_USER_LIST_ACTION,
    payload: employee
}
}

