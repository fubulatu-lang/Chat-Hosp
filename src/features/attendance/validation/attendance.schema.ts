import {z} from "zod";

export const AttendanceSchema=z.object({

    employeeId:z.number(),

    attendanceDate:z.string(),

    checkIn:z.string(),

    status:z.enum([

        "PRESENT",

        "ABSENT",

        "LATE",

        "LEAVE"

    ])

});

export type AttendanceForm=

z.infer<typeof AttendanceSchema>;