import { configureStore, createSlice } from '@reduxjs/toolkit'
import { act } from 'react';
import user from './store/userSlice.js';
import cartSample from './store/cartSampleSlice.js';

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

export default configureStore({
  reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cartSample : cartSample.reducer
   }
}) 