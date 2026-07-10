import {
TextField,
InputAdornment
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(){

return(

<TextField

fullWidth

placeholder="Search..."

InputProps={{

startAdornment:(

<InputAdornment position="start">

<SearchIcon/>

</InputAdornment>

)

}}

/>

);

}