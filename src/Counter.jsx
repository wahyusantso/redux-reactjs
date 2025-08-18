import { useDispatch, useSelector } from "react-redux";
import { decrement, getCounter, getDoubleCounter, increment } from "./counterSlice";

export default function Counter() {
    //menentukan state yang digunakan berdasarkan yang diregister di store.
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch(); //define dispatch

    //panggil manual selector yang dibuat di state.
    const doubleCounter = useSelector(getDoubleCounter);
    const tripleCounter = useSelector(state => getCounter(state, 3)); //panggil function seolah action untuk manipulasi state.

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
            <h1>Double Counter: {doubleCounter}</h1>
            <h1>Triple Counter: {tripleCounter}</h1>
            <button onClick={handleIncrement} style={{ marginRight: "30px" }}>Increment Counter + 5</button>
            <button onClick={handleDecrement}>Decrement Counter - 5</button>
        </div>
    )
}