import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

export default function Counter() {
    //menentukan state yang digunakan berdasarkan yang diregister di store.
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch(); //define dispatch

    //call dispatch
    function handleIncrement() {
        dispatch(increment(5));
    }

    function handleDecrement() {
        dispatch(decrement(5));
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleIncrement} style={{ marginRight: "30px" }}>Increment Counter + 5</button>
            <button onClick={handleDecrement}>Decrement Counter - 5</button>
        </div>
    )
}