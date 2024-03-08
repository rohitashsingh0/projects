import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([]);

  const handleSubmit = () => {
    if (input) {
      setTodo(prev => [...prev, input]);
      setInput("");
    }
  }

  const handleDeleteTodo = (index) => {
    const updatedTodo = [ ...todos.slice(0, index), ...todos.slice(index + 1)]
    setTodo(updatedTodo)
  }

  return (
    <div className="App">
      <div className='todo-box'>
        <div className='todo-title'>
            <h1>Todo List</h1>
        </div>
        <div className='todo-input'>
            <input type="text" value={input} onChange={(e) => { setInput(e.target.value)}} name="todo" />
            <button onClick={handleSubmit}>+</button>
        </div>
        <div className='todo-list'>
          <ul>
          {todos.map((todo, index) => (
            <li key={index}><button onClick={() => handleDeleteTodo(index)} idx={index}>X</button>{todo} </li>
          ))}            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
