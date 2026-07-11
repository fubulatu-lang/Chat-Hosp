import {
    Card,
    CardContent,
    Divider,
    Stack,
    Typography
} from "@mui/material";

export default function SystemInformation() {

    return (

        <Card>

            <CardContent>

                <Stack spacing={2}>

                    <Typography variant="h6">

                        System Information

                    </Typography>

                    <Divider />

                    <Typography>

                        Application:
                        CHoMA

                    </Typography>

                    <Typography>

                        Version:
                        1.0.0

                    </Typography>

                    <Typography>

                        Database:
                        Neon PostgreSQL

                    </Typography>

                    <Typography>

                        Deployment:
                        Vercel

                    </Typography>

                    <Typography>

                        UI:
                        Material Design 3

                    </Typography>

                </Stack>

            </CardContent>

        </Card>

    );

}
