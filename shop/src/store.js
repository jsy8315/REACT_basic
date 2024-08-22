import { configureStore, createSlice } from '@reduxjs/toolkit'
import { act } from 'react';
import user from './store/userSlice.js';

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

let cartSample = createSlice({
    name : 'cartSample',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ], 
    reducers : {
        upCount(state, a){
            
        }
    }
})
export let { upCount } = cartSample.actions;

export default configureStore({
  reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cartSample : cartSample.reducer
   }
}) 