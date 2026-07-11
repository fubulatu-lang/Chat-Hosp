import {
    Card,
    CardContent,
    FormControlLabel,
    Stack,
    Switch,
    Typography
} from "@mui/material";

export default function NotificationSettings() {

    return (

        <Card>

            <CardContent>

                <Stack spacing={2}>

                    <Typography variant="h6">

                        Notifications

                    </Typography>

                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Email Notifications"
                    />

                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="SMS Notifications"
                    />

                    <FormControlLabel
                        control={<Switch />}
                        label="Push Notifications"
                    />

                </Stack>

            </CardContent>

        </Card>

    );

}
