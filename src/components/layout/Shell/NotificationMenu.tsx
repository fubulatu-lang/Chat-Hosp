import {
  Menu,
  MenuItem
} from "@mui/material";

export default function NotificationMenu() {
  return (
    <Menu open={false}>
      <MenuItem>No notifications</MenuItem>
    </Menu>
  );
}