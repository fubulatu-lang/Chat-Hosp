import {Stack} from "@mui/material";

import PatientTable from "../components/PatientTable";

import {usePatients} from "../hooks/usePatients";

export default function PatientListPage(){

const {data=[]}=usePatients();

return(

<Stack spacing={3}>

<PatientTable patients={data}/>

</Stack>

);

}