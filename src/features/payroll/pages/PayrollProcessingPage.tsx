import { Stack } from "@mui/material";

import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";
import AppButton from "../../../components/ui/AppButton";

export default function PayrollProcessingPage() {

    return (

        <PageContainer>

            <Stack spacing={3}>

                <PageHeader
                    title="Payroll Processing"
                    subtitle="Generate payroll for employees"
                />

                <AppButton>

                    Process Payroll

                </AppButton>

            </Stack>

        </PageContainer>

    );

}