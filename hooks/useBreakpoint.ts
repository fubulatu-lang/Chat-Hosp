import {useTheme} from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";

export default function useBreakpoint(){

const theme=useTheme();

return{

mobile:useMediaQuery(theme.breakpoints.down("sm")),

tablet:useMediaQuery(theme.breakpoints.down("md")),

desktop:useMediaQuery(theme.breakpoints.up("lg"))

};

}