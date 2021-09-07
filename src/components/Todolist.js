import React from 'react';
import Todo from "./Todo";
const Todolist = ({ todos ,setTodos,filteredTodos}) => {
  console.log(todos.id);
    return (  
        <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map(todo => (
            <Todo key={todo.id} setTodos={setTodos} todos={todos} text={todo.text} todo={ todo}/>
          ))}
        </ul>
        
        </div>
    );
}
 
export default Todolist;
