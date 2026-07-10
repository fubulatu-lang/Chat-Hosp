import {create} from "zustand";

import {Employee} from "../api/employee.types";

interface EmployeeState{

    employees:Employee[];

    selected?:Employee;

    setEmployees:(employees:Employee[])=>void;

    select:(employee:Employee)=>void;

    clear:()=>void;

}

export const useEmployeeStore=

create<EmployeeState>((set)=>({

    employees:[],

    selected:undefined,

    setEmployees:(employees)=>

        set({employees}),

    select:(employee)=>

        set({selected:employee}),

    clear:()=>

        set({

            employees:[],

            selected:undefined

        })

}));