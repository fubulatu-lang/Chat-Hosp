import api from "../../../lib/api";

import { Report } from "./report.types";

export async function getReports(){

    const {data}=await api.get<Report[]>("/reports");

    return data;

}

export async function getReport(id:number){

    const {data}=await api.get<Report>(`/reports/${id}`);

    return data;

}

export async function createReport(body:Partial<Report>){

    const {data}=await api.post("/reports",body);

    return data;

}

export async function deleteReport(id:number){

    const {data}=await api.delete(`/reports/${id}`);

    return data;

}