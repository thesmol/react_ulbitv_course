import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='App'>
      <h1>{count}</h1>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <button onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  )
}

export default App
