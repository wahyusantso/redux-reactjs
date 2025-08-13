import { useSelector } from "react-redux";

export default function Counter() {
    //menentukan state yang digunakan berdasarkan yang diregister di store.
    const counter = useSelector(state => state.counter);

    return (
        <div>
            <h1>Counter: {counter}</h1>
        </div>
    )
}