import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPosts=createAsyncThunk("posts/fetchPosts",async()=>{
    const res =await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(res)
    return res.data;
  


})
const postSlice=createSlice({
    name:'posts',
    initialState:{
     Loading:false,
     posts:[],
     error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending,(state)=>{
            state.Loading=true;
        })
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.Loading=false;
            state.posts=action.payload
            state.error=null;

        })
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.Loading=false;
            state.posts=[];
            state.error=action.error.message;

        })

    }
})

export default postSlice.reducer;