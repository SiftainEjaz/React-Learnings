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
        },
        decrement : (state) => {
            if(state.counter == 0)
            {
                alert('Counter is 0.')
                return;
            }
            else
                state.counter -= 1;
        },
        reset : (state) => {
            state.counter = 0;
        }
    }
})

export const {increment, incrementByAmount, decrement, reset} = counterSlice.actions;

export default counterSlice.reducer;