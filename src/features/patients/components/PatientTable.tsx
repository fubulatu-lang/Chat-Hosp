import {

Table,

TableBody,

TableCell,

TableHead,

TableRow

} from "@mui/material";

import {Patient} from "../api/patient.types";

export default function PatientTable({

patients

}:{

patients:Patient[]

}){

return(

<Table>

<TableHead>

<TableRow>

<TableCell>Hospital No.</TableCell>

<TableCell>Name</TableCell>

<TableCell>Gender</TableCell>

<TableCell>Phone</TableCell>

</TableRow>

</TableHead>

<TableBody>

{patients.map(patient=>(

<TableRow key={patient.id}>

<TableCell>{patient.hospitalNumber}</TableCell>

<TableCell>{patient.firstName} {patient.lastName}</TableCell>

<TableCell>{patient.gender}</TableCell>

<TableCell>{patient.phone}</TableCell>

</TableRow>

))}

</TableBody>

</Table>

);

}