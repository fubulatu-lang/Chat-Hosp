import api from "../../../lib/api";

import { Payroll } from "./payroll.types";

export async function getPayrolls(){

    const {data}=await api.get<Payroll[]>("/payroll");

    return data;

}

export async function getPayroll(id:number){

    const {data}=await api.get<Payroll>(`/payroll/${id}`);

    return data;

}

export async function createPayroll(

    body:Partial<Payroll>

){

    const {data}=await api.post(

        "/payroll",

        body

    );

    return data;

}

export async function updatePayroll(

    id:number,

    body:Partial<Payroll>

){

    const {data}=await api.put(

        `/payroll/${id}`,

        body

    );

    return data;

}

export async function deletePayroll(id:number){

    const {data}=await api.delete(

        `/payroll/${id}`

    );

    return data;

}