import {
 AppBar,
 Toolbar,
 Typography
} from "@mui/material";

export default function TopBar() {
 return (
  <AppBar
   position="sticky"
   color="inherit"
   elevation={1}
  >
   <Toolbar>

    <Typography
      variant="h6"
      fontWeight={700}
    >
      HRAPIMS
    </Typography>

   </Toolbar>
  </AppBar>
 );
}