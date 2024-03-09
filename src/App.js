
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
  
    </div>
  );
}

export default App;
