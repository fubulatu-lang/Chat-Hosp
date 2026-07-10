import {create} from "zustand";

import {User} from "../types";

interface AuthState{

user?:User;

token?:string;

login:(user:User,token:string)=>void;

logout:()=>void;

}

export const useAuthStore=create<AuthState>(

(set)=>({

user:undefined,

token:undefined,

login:(user,token)=>

set({

user,

token

}),

logout:()=>

set({

user:undefined,

token:undefined

})

})

);