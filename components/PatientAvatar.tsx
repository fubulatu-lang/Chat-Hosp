import { Avatar } from "@mui/material";

interface Props {
  firstName: string;
  lastName: string;
}

export default function PatientAvatar({
  firstName,
  lastName,
}: Props) {
  return (
    <Avatar>
      {firstName[0]}
      {lastName[0]}
    </Avatar>
  );
}