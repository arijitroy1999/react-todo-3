import React, { useState,useEffect} from 'react';
import './App.css';
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const [inputText, setInputText] = useState("");//only the text input
  const [todos, setTodos] = useState([]);//complete array of todos
  const [status, setStatus] = useState('all');//completed or uncompleted tasks
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed !== true));
        break;
      default:
        setFilteredTodos(todos);
    }
  }
  return (
    <div className="app">
      <header>
        <h2>
          MY TODO LIST
        </h2>
      </header>  
      <Form todos={todos} inputText={inputText} setTodos={setTodos}
        setStatus={setStatus}
        setInputText={setInputText}
        
      />
      <Todolist setTodos={setTodos} filteredTodos={ filteredTodos}  todos={ todos }/>
    </div>
  );
}

export default App;
