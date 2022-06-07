import { add,dec,addwithval,subwithval,mulwithval,divwithval } from "./action"
export const Add=()=>(
    {type:add}
)
export const Dec=()=>( {type:dec})
export const Addwithval=(val)=>({type:addwithval,payload:val})
export const Mulwithval=(val)=>({type:mulwithval,payload:val})
export const Divwithval=(val)=>({type:divwithval,payload:val})
export const Subwithval=(val)=>({type:subwithval,payload:val})