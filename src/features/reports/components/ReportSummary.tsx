import {
    Card,
    CardContent,
    Grid,
    Typography
} from "@mui/material";

export default function ReportSummary() {

    return (

        <Grid container spacing={2}>

            <Grid item xs={12} md={3}>

                <Card>

                    <CardContent>

                        <Typography variant="subtitle2">

                            Total Reports

                        </Typography>

                        <Typography variant="h4">

                            0

                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

            <Grid item xs={12} md={3}>

                <Card>

                    <CardContent>

                        <Typography variant="subtitle2">

                            Generated Today

                        </Typography>

                        <Typography variant="h4">

                            0

                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

            <Grid item xs={12} md={3}>

                <Card>

                    <CardContent>

                        <Typography variant="subtitle2">

                            Scheduled

                        </Typography>

                        <Typography variant="h4">

                            0

                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

            <Grid item xs={12} md={3}>

                <Card>

                    <CardContent>

                        <Typography variant="subtitle2">

                            Failed

                        </Typography>

                        <Typography variant="h4">

                            0

                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

        </Grid>

    );

}