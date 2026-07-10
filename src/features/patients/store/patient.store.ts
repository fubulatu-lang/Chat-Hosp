import {create} from "zustand";

import {Patient} from "../api/patient.types";

interface PatientState{

patients:Patient[];

selected?:Patient;

setPatients:(patients:Patient[])=>void;

select:(patient:Patient)=>void;

}

export const usePatientStore=create<PatientState>((set)=>({

patients:[],

selected:undefined,

setPatients:(patients)=>set({patients}),

select:(selected)=>set({selected})

}));