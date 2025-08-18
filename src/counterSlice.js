import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        //implementasi action didalam reducer.
        increment: (state, action) => { //nilai dari action disimpan pada payload. action hanya untuk manipulasi atau mengubah nilai state, bukan mendapatkan state.
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
    },
    selectors: { //membuat manual selector untuk mendapatkan nilai.
        getDoubleCounter: (state) => {
            return state * 2;
        },
        getCounter: (state, value) => {
            return state * value; //hitung berdasarkan nilai parameter action.
        }
    }
});

//use destructuring
export const {increment, decrement} = counterSlice.actions;
export const {getDoubleCounter, getCounter} = counterSlice.selectors;