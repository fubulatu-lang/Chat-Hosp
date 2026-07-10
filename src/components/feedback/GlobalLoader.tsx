import {
  Backdrop,
  CircularProgress
} from "@mui/material";

export default function GlobalLoader({
  open
}: {
  open: boolean;
}) {
  return (
    <Backdrop open={open}>
      <CircularProgress />
    </Backdrop>
  );
}