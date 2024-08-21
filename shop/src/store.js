import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducers : {
        changeName(state){
            return 'john ' + state
        },
        changeName02(state){

        }
    }

})

export let { changeName, changeName02 } = user.actions;

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

let cartSample = createSlice({
    name : 'cartSample',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ] 
})

export default configureStore({
  reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cartSample : cartSample.reducer
   }
}) 