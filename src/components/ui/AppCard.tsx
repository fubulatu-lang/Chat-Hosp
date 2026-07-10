import {
Card,
CardContent,
CardProps
} from "@mui/material";

export default function AppCard({

children,

...props

}:CardProps){

return(

<Card {...props}>

<CardContent>

{children}

</CardContent>

</Card>

);

}