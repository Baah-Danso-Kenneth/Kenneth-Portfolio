import { createSlice } from "@reduxjs/toolkit";

interface sidebarProps{
    isOpen:boolean
}

const initialState:sidebarProps={
    isOpen:false
}
export const SidebarSlice=createSlice({
   name:'sidebar',
   initialState,
   reducers:{

    toggleState:(state)=>{
        state.isOpen = !state.isOpen
    }

   }
});


export const {toggleState} = SidebarSlice.actions
export default SidebarSlice.reducer