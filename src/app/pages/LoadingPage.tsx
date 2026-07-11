import {
    Box,
    CircularProgress,
    Stack,
    Typography
} from "@mui/material";

import PageContainer from "../../components/common/PageContainer";

export default function LoadingPage() {

    return (

        <PageContainer>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="70vh"
            >

                <Stack
                    spacing={3}
                    alignItems="center"
                >

                    <CircularProgress
                        size={64}
                    />

                    <Typography
                        variant="h5"
                        fontWeight={600}
                    >

                        Loading CHoMA...

                    </Typography>

                    <Typography
                        color="text.secondary"
                        align="center"
                    >

                        Please wait while the
                        Comprehensive Hospital
                        Management App loads.

                    </Typography>

                </Stack>

            </Box>

        </PageContainer>

    );

}
