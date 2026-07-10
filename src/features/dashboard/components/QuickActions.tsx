import { Stack } from "@mui/material";

import AppButton from "../../../components/ui/AppButton";
import AppCard from "../../../components/ui/AppCard";

export default function QuickActions() {

    return (

        <AppCard>

            <Stack spacing={2}>

                <AppButton>Add Patient</AppButton>

                <AppButton>Add Employee</AppButton>

                <AppButton>Create Report</AppButton>

            </Stack>

        </AppCard>

    );

}