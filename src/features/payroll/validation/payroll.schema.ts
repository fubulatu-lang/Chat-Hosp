import {z} from "zod";

export const PayrollSchema=z.object({

    employeeId:z.number(),

    payrollMonth:z.string(),

    basicSalary:z.number(),

    allowances:z.number(),

    deductions:z.number(),

    netSalary:z.number(),

    status:z.enum([

        "PENDING",

        "PROCESSING",

        "PAID",

        "FAILED"

    ])

});

export type PayrollForm=

z.infer<typeof PayrollSchema>;