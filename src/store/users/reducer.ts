import {
  SET_USER_LIST_ACTION,
  REMOVE_USER_LIST_ACTION,
  EDIT_USER_LIST_ACTION,
} from "./actionTypes";

export const initialState = {
  employees: {
    employeesList: [
      {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        phone: Number,
        state: "",
        city: "",
        gender: "",
        language: "",
      },
    ],
    loader: false,
    error: null,
  },
};

export const employee_reducer = (state = initialState,{ type, payload }: any) => {
  switch (type) {
    case SET_USER_LIST_ACTION:
      const result = {
        ...state,
        employees: {
          ...state.employees,
          employeesList: payload.employees,
          loader: payload.loader,
        },
      };
      return result;

    case REMOVE_USER_LIST_ACTION:
      const employeesfilter = state.employees.employeesList.filter(
        (employee: any) => {
          return employee.id !== payload.id;
        }
      );
      console.log(employeesfilter);
      return {
        ...state,
        employees: {
          ...state.employees,
          employeesList: employeesfilter,
        },
      };

    case EDIT_USER_LIST_ACTION:
      const updateFilter: any = state.employees.employeesList.filter(
        (employee: any) => {
          return employee.id.toString() !== payload.id.toString();
        }
      );
      payload.id = parseInt(payload.id);
      updateFilter.push(payload.data);
      return {
        ...state,
        employees: {
          ...state.employees,
          employeesList: updateFilter,
        },
      };

    default:
      return state;
  }
};
