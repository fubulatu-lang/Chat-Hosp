import {
  Grid,
  TextField
} from "@mui/material";

export default function EmergencyContact() {

  return (

    <Grid container spacing={2}>

      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Contact Name"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Phone Number"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Relationship"
        />
      </Grid>

    </Grid>

  );

}