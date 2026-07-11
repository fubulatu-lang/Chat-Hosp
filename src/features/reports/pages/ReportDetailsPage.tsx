import { Stack } from "@mui/material";

import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";

import ReportHeader from "../components/ReportHeader";

export default function ReportDetailsPage() {

    return (

        <PageContainer>

            <Stack spacing={3}>

                <PageHeader
                    title="Report Details"
                    subtitle="View generated report"
                />

                <ReportHeader />

            </Stack>

        </PageContainer>

    );

}