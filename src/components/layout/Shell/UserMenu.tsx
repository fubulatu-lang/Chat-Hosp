import {
  Avatar,
  Menu,
  MenuItem
} from "@mui/material";

export default function UserMenu() {
  return (
    <>
      <Avatar>M</Avatar>

      <Menu open={false}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
}