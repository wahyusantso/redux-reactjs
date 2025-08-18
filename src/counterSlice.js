import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        //implementasi action didalam reducer.
        increment: (state, action) => { //nilai dari action disimpan pada payload.
            if (action.payload) { //di jalankan jika terdapat nilai pada payload. 
                return state + action.payload;
            } else {
                return state + 1;
            }
        },
        decrement: (state, action) => {
            if (action.payload) {
                return state - action.payload;
            } else {
                return state - 1;
            }
        }
    }
});

//use destructuring
export const {increment, decrement} = counterSlice.actions;