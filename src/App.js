
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Счётчик</h2>
        <h1>{count}</h1>
        <button onClick={decrement} className='decrement'>Вычесть</button>
        <button onClick={increment} className='increment'>Добавить</button>
      </div>
  
    </div>
  );
}

export default App;
