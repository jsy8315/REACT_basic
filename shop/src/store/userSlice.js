import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age : 20 },
    reducers : {
        changeName(state){
            // return { name : 'Jung', age : 20 };
            state.name = 'Park'; //Immer.js 도움
        },
        increase(state){
            state.age += 1;
        },
        increase02(state){
            state.age += 10;
        },
        increase03(state, action){
            state.age += action.payload;
        }
    }
})

export let { changeName, increase, increase02 , increase03 } = user.actions;

export default user