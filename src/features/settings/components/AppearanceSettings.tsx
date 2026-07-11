import {
    Card,
    CardContent,
    MenuItem,
    Stack,
    TextField,
    Typography
} from "@mui/material";

export default function AppearanceSettings() {

    return (

        <Card>

            <CardContent>

                <Stack spacing={3}>

                    <Typography variant="h6">

                        Appearance

                    </Typography>

                    <TextField
                        select
                        label="Theme"
                        defaultValue="SYSTEM"
                    >

                        <MenuItem value="LIGHT">
                            Light
                        </MenuItem>

                        <MenuItem value="DARK">
                            Dark
                        </MenuItem>

                        <MenuItem value="SYSTEM">
                            System
                        </MenuItem>

                    </TextField>

                </Stack>

            </CardContent>

        </Card>

    );

}
