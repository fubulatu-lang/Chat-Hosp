import {
  Card,
  CardContent,
  Stack,
  Typography
} from "@mui/material";

import { Attendance } from "../api/attendance.types";

interface Props {
  attendance: Attendance;
}

export default function AttendanceCard({
  attendance
}: Props) {

  return (

    <Card>

      <CardContent>

        <Stack spacing={1}>

          <Typography variant="h6">

            {attendance.employeeName}

          </Typography>

          <Typography>

            {attendance.attendanceDate}

          </Typography>

          <Typography color="text.secondary">

            {attendance.checkIn} - {attendance.checkOut ?? "--"}

          </Typography>

        </Stack>

      </CardContent>

    </Card>

  );

}