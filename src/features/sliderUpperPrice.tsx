import { createSlice } from "@reduxjs/toolkit";
export const upperPriceSlice=createSlice({
    name:"upperPrice",
    initialState:{value:{upperPrice:0}},
    reducers:{
        setUpperData:(state:any,action)=>{
            state.value=action.payload
        },
    }
})
export const {setUpperData}=upperPriceSlice.actions
export default upperPriceSlice.reducer