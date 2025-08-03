import { createSlice } from "@reduxjs/toolkit";
const intialStateValue={type:"Instant",time:"2-5 min",fee:0.001}
export const DropDownSlice=createSlice({
    name:"cryptoData",
    initialState:{value:intialStateValue},
    reducers:{
        selectType:(state:any,action)=>{
            state.value=action.payload
        },
     }
})
export const {selectType}=DropDownSlice.actions
export default DropDownSlice.reducer