import { Grid } from "@mui/material";

import WelcomeCard from "./WelcomeCard";
import PatientSummary from "./PatientSummary";
import EmployeeSummary from "./EmployeeSummary";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";

export default function DashboardGrid() {

    return (

        <Grid container spacing={3}>

            <Grid item xs={12}>
                <WelcomeCard />
            </Grid>

            <Grid item xs={12} md={6}>
                <PatientSummary />
            </Grid>

            <Grid item xs={12} md={6}>
                <EmployeeSummary />
            </Grid>

            <Grid item xs={12} md={6}>
                <QuickActions />
            </Grid>

            <Grid item xs={12} md={6}>
                <RecentActivity />
            </Grid>

        </Grid>

    );

}