import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age : 20 },
    reducers : {
        changeName(state){
            // return { name : 'Jung', age : 20 };
            state.name = 'Park'; //Immer.js 도움
        },
        upAge(state){
            state.age += 1;
        }
    }
})

export let { changeName, upAge } = user.actions;

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
        upCount(state){
            return state + 1
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