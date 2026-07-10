import {
Box,
CircularProgress
} from "@mui/material";

export default function LoadingScreen(){

return(

<Box

display="flex"

justifyContent="center"

alignItems="center"

height="70vh"

>

<CircularProgress/>

</Box>

);

}