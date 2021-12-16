import { ActionType } from "../Constants/Action-types"

export const  SetProduct=(product)=>{
    return {
        type:ActionType.SET_PRODUCTS,
        payload:product
    };
};


export const  SelectedProduct=(product)=>{
    return {
        type:ActionType.SelectedProduct,
        payload:product
    };
};
