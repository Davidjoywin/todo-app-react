import { useEffect, useState, memo } from 'react';
import { storeValue, retrieve_storage_todo, editStorage, popTodo } from './storage.js';
import './App.css';


function App() {
  const [todo_list, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(() => retrieve_storage_todo());
  }, [todo_list]);

  const get_todo_value = (e) => {
    e.preventDefault();
    const todo_input = document.querySelector(".todo-input");
    storeValue(todo_input.value);
    todo_input.value = "";
  }

  const onTick = (e, id) => {
    const value = e.target.checked;
    const storage = retrieve_storage_todo();
    const todo = storage[id];
    todo.done = value;
    editStorage(id, todo);
  }
  
  return (
    <div className="App">
      <header>
        <h1>To-Do</h1>
      </header>
      <main className="main">
        <form className="todo-form" name="form" onSubmit={ (event) => get_todo_value(event) }>
          <input autoComplete='off' id="todo-input" name="todo" className="todo-input"/>
          <button className="todo-add-bttn">Add</button>
        </form>
        <div className="todo-list">
          {todo_list.map((todo, id) =>
            <div key={ id } className="todo">
              <div>
                <input className="todo-check" name="todo.todo" type="checkbox" checked={ todo.done }onChange={ (e) => onTick(e, id) }/>
                <span className="span">{ todo.todo }</span>
              </div>
              <button className="delete-todo" onClick={ () => popTodo(id) }>delete</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default memo(App);
