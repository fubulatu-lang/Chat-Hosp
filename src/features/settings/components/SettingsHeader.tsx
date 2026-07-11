import {
    Stack,
    Typography
} from "@mui/material";

export default function SettingsHeader() {

    return (

        <Stack spacing={1}>

            <Typography
                variant="h4"
                fontWeight={700}
            >

                Settings

            </Typography>

            <Typography color="text.secondary">

                Configure hospital preferences, users and system options.

            </Typography>

        </Stack>

    );

}
