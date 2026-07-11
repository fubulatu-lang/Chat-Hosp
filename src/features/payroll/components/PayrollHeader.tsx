import {
    Stack,
    Typography
} from "@mui/material";

export default function PayrollHeader() {

    return (

        <Stack spacing={1}>

            <Typography
                variant="h4"
                fontWeight={700}
            >

                Payroll

            </Typography>

            <Typography color="text.secondary">

                Payroll processing and salary management.

            </Typography>

        </Stack>

    );

}