import { createSlice } from "@reduxjs/toolkit";
export const cryptoDataSlice=createSlice({
    name:"cryptoData",
    initialState:{value:{id:0}},
    reducers:{
        selectData:(state:any,action)=>{
            state.value=action.payload
        },
       
    }
})
export const {selectData}=cryptoDataSlice.actions
export default cryptoDataSlice.reducer