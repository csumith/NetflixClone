import { createSlice } from "@reduxjs/toolkit";

const changeLanguageSlice = createSlice({
    name:"multilango",
    initialState:{
        selectedlango:"en",
    },
    reducers:{
        addMultilanguage:(state,action)=>{
            state.selectedlango = action.payload
        }
    }
})
export const  {addMultilanguage} = changeLanguageSlice.actions
export default changeLanguageSlice.reducer