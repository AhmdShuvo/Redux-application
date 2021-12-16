import { ActionType } from "../Constants/Action-types";

const initialState={products:[{
    id:1,
    name:'shuvo',
    Age:30
}]};
export const productReducer=(state=initialState ,{type,payload})=>{
    switch (type) {
        case ActionType.SET_PRODUCTS:
            
       return state
    
        default:
            return state
    }

}