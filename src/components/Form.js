import React from 'react';

const Form = ({ inputText,setInputText,setTodos,todos,setStatus}) => {
  //func to update the state
  const inputTextHandler = (e) => {
    setInputText(e.target.value);//updating the state
    
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();//prevents the page from refreshing everytime we press +
    setTodos([...todos, {
      text:inputText,completed:false,id:Math.random()*100
    }]);
    setInputText("");//resetting the state to empty string
  }
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
    return (
        <form>
        <input value={ inputText} onChange={ inputTextHandler} type="text" className="todo-input" />
        <button onClick={ submitTodoHandler } className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
          <select onChange={statusHandler } name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
      );
}
 
export default Form;