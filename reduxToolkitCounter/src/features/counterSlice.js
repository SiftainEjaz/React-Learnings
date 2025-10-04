import {createSlice} from '@reduxjs/toolkit';



export const counterSlice = createSlice({
    name : 'Counter',
    initialState : {counter : 0},
    reducers : {
        increment : (state) => {
            state.counter += 1;
        },
        incrementByAmount : (state,action) => {
            state.counter += action.payload;
        }
    }
})

export const {increment, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;