import { createSlice } from "@reduxjs/toolkit";

let id = 0;

export const todoListSlice = createSlice({
    name: "todoList",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const {name} = action.payload;
            state.push({name, id: id++});
        },
        removeTodo: (state, action) => {
            const {id} = action.payload;
            const index = state.findIndex(todo => todo.id === id); //cari index.
            state.splice(index, 1); //hapus data berdasarkan index.
        },
        updateTodo: (state, action) => {
            const {id, name} = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.name = name;
            }
        }
    },
    selectors: {
        getTodo: (state, id) => {
            return state.find(todo => todo.id === id);
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoListSlice.actions;
export const { getTodo } = todoListSlice.selectors;