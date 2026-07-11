import {useQuery} from "@tanstack/react-query";

import {getAttendances} from "../api/attendance.api";

export function useAttendances(){

    return useQuery({

        queryKey:["attendance"],

        queryFn:getAttendances

    });

}