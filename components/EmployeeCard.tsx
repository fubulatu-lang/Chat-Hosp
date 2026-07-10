import {

    Card,

    CardContent,

    Stack,

    Typography

} from "@mui/material";

import { Employee } from "../api/employee.types";

interface Props {

    employee: Employee;

}

export default function EmployeeCard({

    employee

}: Props) {

    return (

        <Card>

            <CardContent>

                <Stack spacing={1}>

                    <Typography variant="h6">

                        {employee.firstName} {employee.lastName}

                    </Typography>

                    <Typography>

                        {employee.designation}

                    </Typography>

                    <Typography color="text.secondary">

                        {employee.department}

                    </Typography>

                </Stack>

            </CardContent>

        </Card>

    );

}