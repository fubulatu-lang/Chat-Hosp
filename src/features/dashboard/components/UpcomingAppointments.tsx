import { Typography } from "@mui/material";

import AppCard from "../../../components/ui/AppCard";

export default function UpcomingAppointments() {

    return (

        <AppCard>

            <Typography variant="h6">
                Upcoming Appointments
            </Typography>

            <Typography color="text.secondary">
                None scheduled.
            </Typography>

        </AppCard>

    );

}