import { employeesActionType } from "../store/users"
import { getReq } from "./apiCall"
import { setEmployeeList} from "../store/users/actions";

export function getUserList(setEmployeeData :any) {
    
    return (dispatch: any) => {
        dispatch(setEmployeeList([],true))
        setEmployeeData({data:[],loader:true})
        getReq("https://my-json-server.typicode.com/rahulchintu/testing/employees").then((res: any) => {
            setTimeout(() => {
                dispatch(setEmployeeList(res.data,false))
                setEmployeeData({data:res.data,loader:false})
            }, 100);
        })

    }
}