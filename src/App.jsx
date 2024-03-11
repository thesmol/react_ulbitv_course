import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';

function App() {
  const [value, setValue] = useState("Состояние в элементе");


  return (
    <div className='App'>
      <Counter />
      <ClassCounter />
      <h1>{value}</h1>
      <input
        type='text'
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  )
}

export default App
