import axios from "axios";

const api=axios.create({

baseURL:"/api/patients"

});

export async function getPatients(){

const {data}=await api.get("/");

return data;

}

export async function getPatient(id:number){

const {data}=await api.get(`/${id}`);

return data;

}

export async function createPatient(body:any){

const {data}=await api.post("/",body);

return data;

}

export async function updatePatient(id:number,body:any){

const {data}=await api.put(`/${id}`,body);

return data;

}

export async function deletePatient(id:number){

const {data}=await api.delete(`/${id}`);

return data;

}