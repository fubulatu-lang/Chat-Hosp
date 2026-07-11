import {z} from "zod";

export const ReportSchema=z.object({

    title:z.string().min(3),

    type:z.enum([

        "PATIENT",

        "EMPLOYEE",

        "ATTENDANCE",

        "PAYROLL",

        "FINANCIAL"

    ])

});

export type ReportForm=

z.infer<typeof ReportSchema>;