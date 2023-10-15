import {configureStore } from '@reduxjs/toolkit';
// import { counterSlice } from './counterSlice';
// import PostSlice from './PostSlice';
import counterSlice from './counterSlice';
import postReducer from './PostSlice';



export const store = configureStore({
  
    reducer:{
        shaharia:counterSlice,
        posts:postReducer,
    }
  })