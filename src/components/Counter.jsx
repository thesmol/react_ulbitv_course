import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>
                Increment
            </button>

            <button onClick={handleDecrement}>
                Decrement
            </button>
        </div>
    )
};

export default Counter;
