import {
    Card,
    CardContent,
    Stack,
    TextField,
    Typography
} from "@mui/material";

export default function GeneralSettings() {

    return (

        <Card>

            <CardContent>

                <Stack spacing={3}>

                    <Typography variant="h6">

                        General Settings

                    </Typography>

                    <TextField
                        label="Hospital Name"
                        fullWidth
                    />

                    <TextField
                        label="Hospital Address"
                        fullWidth
                    />

                    <TextField
                        label="Hospital Email"
                        fullWidth
                    />

                    <TextField
                        label="Hospital Phone"
                        fullWidth
                    />

                </Stack>

            </CardContent>

        </Card>

    );

}
