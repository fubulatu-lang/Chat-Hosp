import {useAuthStore} from "../../features/auth/store/auth.store";

export default function usePermission(){

const {user}=useAuthStore();

function can(permission:string){

return true;

}

return{

user,

can

};

}