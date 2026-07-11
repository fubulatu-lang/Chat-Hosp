import { Stack } from "@mui/material";

import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";

import AttendanceSummary from "../components/AttendanceSummary";

export default function AttendanceReportPage() {

    return (

        <PageContainer>

            <Stack spacing={3}>

                <PageHeader

                    title="Attendance Reports"

                    subtitle="Attendance analytics"

                />

                <AttendanceSummary />

            </Stack>

        </PageContainer>

    );

}