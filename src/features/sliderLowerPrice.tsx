import { createSlice } from "@reduxjs/toolkit";
export const lowerPriceSlice=createSlice({
    name:"lowerPrice",
    initialState:{val:{price:0}},
    reducers:{
        setLowerData:(state:any,action)=>{
            state.val=action.payload
        },
    }
})
export const {setLowerData}=lowerPriceSlice.actions
export default lowerPriceSlice.reducer