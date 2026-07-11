import {
  Card,
  CardContent,
  Stack,
  Typography
} from "@mui/material";

import { Payroll } from "../api/payroll.types";

interface Props {
  payroll: Payroll;
}

export default function PayrollCard({
  payroll
}: Props) {

  return (

    <Card>

      <CardContent>

        <Stack spacing={1}>

          <Typography variant="h6">

            {payroll.employeeName}

          </Typography>

          <Typography>

            {payroll.payrollMonth}

          </Typography>

          <Typography color="text.secondary">

            GHS {payroll.netSalary.toFixed(2)}

          </Typography>

        </Stack>

      </CardContent>

    </Card>

  );

}