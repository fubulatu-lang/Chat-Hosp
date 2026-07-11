import {useQuery} from "@tanstack/react-query";

import {getReports} from "../api/reports.api";

export function useReports(){

    return useQuery({

        queryKey:["reports"],

        queryFn:getReports

    });

}