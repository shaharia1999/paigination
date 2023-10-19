import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const CardSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
      add:(state,action)=>{
    //    state=[...state,action.payload]
    state.push(action.payload)
      },
      remove:(state,action)=>{
           return state.filter((item)=>item.id != action.payload) 
      } 
    }
})
 export const {add,remove}=CardSlice.actions;
 export default CardSlice.reducer;