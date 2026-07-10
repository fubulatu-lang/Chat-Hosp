import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={1}
    >
      <Toolbar>

        <Typography variant="h6" fontWeight={700}>
          HRAPIMS
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton>
          <AccountCircleIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}