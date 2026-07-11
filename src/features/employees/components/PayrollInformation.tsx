import {
  Grid,
  TextField
} from "@mui/material";

export default function PayrollInformation() {
  return (
    <Grid container spacing={2}>

      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Basic Salary"
          type="number"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Bank Account"
        />
      </Grid>

    </Grid>
  );
}