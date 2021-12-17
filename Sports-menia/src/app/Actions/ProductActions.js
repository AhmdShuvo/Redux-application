import { ActionType } from "../Constants/Action-types"

export const  SetProduct=(product)=>{
    return {
        type:ActionType.SET_PRODUCTS,
        payload:product
    };
};


export  const SELECTED_PRODUCT=(product)=>{
    return {
        type:ActionType.SELECTED_PRODUCT,
        payload:product
    };
};
