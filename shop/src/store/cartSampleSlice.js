import { configureStore, createSlice } from '@reduxjs/toolkit'

let cartSample = createSlice({
    name : 'cartSample',
    initialState : [
        {id : 10, name : 'White and Black', count : 2},
        {id : 12, name : 'Grey Yordan', count : 1}
      ], 
    reducers : {
        upCount(state, action){
            state.map((a02, i)=>{
                if(action.payload == state[i].id){
                    state[i].count += 1;
                }
            }
            )
        },
        detailCart(state, action){
            return [...state, action.payload];
        }
    }
})
export let { upCount, detailCart } = cartSample.actions;

export default cartSample;