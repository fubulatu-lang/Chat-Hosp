import {
  MenuItem,
  Stack,
  TextField
} from "@mui/material";

export default function AttendanceFilters() {

  return (

    <Stack direction="row" spacing={2}>

      <TextField
        select
        label="Status"
        size="small"
        sx={{ minWidth: 180 }}
      >

        <MenuItem value="">

          All

        </MenuItem>

        <MenuItem value="PRESENT">

          Present

        </MenuItem>

        <MenuItem value="ABSENT">

          Absent

        </MenuItem>

        <MenuItem value="LATE">

          Late

        </MenuItem>

        <MenuItem value="LEAVE">

          Leave

        </MenuItem>

      </TextField>

    </Stack>

  );

}