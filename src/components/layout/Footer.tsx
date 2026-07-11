import {
    Box,
    Divider,
    Typography
} from "@mui/material";

export default function Footer(){

    return(

        <>

            <Divider/>

            <Box
                py={2}
                textAlign="center"
            >

                <Typography
                    variant="body2"
                    color="text.secondary"
                >

                    © {new Date().getFullYear()} CHoMA —
                    Comprehensive Hospital Management App

                </Typography>

            </Box>

        </>

    );

}
