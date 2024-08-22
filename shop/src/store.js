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
        upCount(state, action){
            state.map((a02, i)=>{
                if(action.payload == state[i].id){
                    state[i].count += 1;
                }
            }
            )
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