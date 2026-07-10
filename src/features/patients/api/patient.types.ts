export interface Patient {

    id:number;

    hospitalNumber:string;

    firstName:string;

    middleName?:string;

    lastName:string;

    gender:"Male"|"Female";

    dateOfBirth:string;

    phone:string;

    email?:string;

    address:string;

    nationalId?:string;

    bloodGroup?:string;

    genotype?:string;

    maritalStatus?:string;

    occupation?:string;

    emergencyContact:string;

    createdAt:string;

}