export type ReportType =
    | "PATIENT"
    | "EMPLOYEE"
    | "ATTENDANCE"
    | "PAYROLL"
    | "FINANCIAL";

export interface Report {

    id:number;

    title:string;

    description?:string;

    type:ReportType;

    generatedBy:string;

    generatedAt:string;

    fileUrl?:string;

}