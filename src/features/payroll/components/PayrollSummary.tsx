import {
    Card,
    CardContent,
    Grid,
    Typography
} from "@mui/material";

export default function PayrollSummary() {

    return (

        <Grid container spacing={2}>

            <Grid item xs={12} md={3}>

                <Card>

                    <CardContent>

                        <Typography variant="subtitle2">

                            Total Payroll

                        </Typography>

                        <Typography variant="h4">

                            GHS 0.00

                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

            <Grid item xs={12} md={3}>

                <Card>

                    <CardContent>

                        <Typography variant="subtitle2">

                            Employees Paid

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

                            Pending

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