import {

    Stack,

    Typography

} from "@mui/material";

export default function EmployeeHeader() {

    return (

        <Stack spacing={1}>

            <Typography

                variant="h4"

                fontWeight={700}

            >

                Employee Profile

            </Typography>

            <Typography color="text.secondary">

                Employee information and employment details.

            </Typography>

        </Stack>

    );

}