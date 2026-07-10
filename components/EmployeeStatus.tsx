import StatusChip from "../../../components/ui/StatusChip";

interface Props {

    status: string;

}

export default function EmployeeStatus({

    status

}: Props) {

    return (

        <StatusChip status={status} />

    );

}