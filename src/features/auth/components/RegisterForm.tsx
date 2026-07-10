import {

Stack,

TextField,

Typography

} from "@mui/material";

import AppButton from "../../../components/ui/AppButton";

export default function RegisterForm(){

return(

<Stack spacing={3}>

<Typography

variant="h4"

fontWeight={700}

>

Create Account

</Typography>

<TextField

label="Full Name"

fullWidth

/>

<TextField

label="Email"

fullWidth

/>

<TextField

label="Password"

type="password"

fullWidth

/>

<AppButton>

Register

</AppButton>

</Stack>

);

}