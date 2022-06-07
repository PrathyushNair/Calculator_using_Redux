export const reducer=(state,action)=>{
    switch(action.type){
        case"initialize":
        {
            return{...state,count:0}
        }
        case "add":{
            state.count++
            return{...state}
        }
        case "dec":{
            state.count--
            return{...state}
        }
        case "addwithval":{
            state.count=state.count+action.payload
            return{...state}
        }
        case "mulwithval":{
            state.count=state.count*action.payload
            return{...state}
        }
        case "decwithval":{
            state.count=state.count-action.payload
            return{...state}
        }
        case "divwithval":{
            if(action.payload!==0)
            {
                state.count=state.count/action.payload
                return{...state}
            }
            else{
                return{...state,count:"Error"}
            }
            
           
            
        }
        default:{
            return {...state}
        }
    }
 

}