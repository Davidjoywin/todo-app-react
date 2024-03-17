const storeValue = (value) => {
    let todo_value;
    if (!localStorage.getItem("todo")) {
      todo_value = [];
    } else {
      let storage = localStorage.getItem("todo");
      todo_value = JSON.parse(storage);
    //   console.log(todo_value);
    }
    let todo_item = {"done": false, "todo": value};
    todo_value.push(todo_item);
    let stringify_value = JSON.stringify(todo_value);
    localStorage.setItem("todo", stringify_value);
  }
  
  const retrieve_storage_todo = () => {
    let todo_value = localStorage.getItem("todo");
    todo_value = JSON.parse(todo_value);
    if (!todo_value) return [];
    return todo_value;
  }

  const editStorage = (id, todo) => {
    const storage = JSON.parse(localStorage.getItem("todo"));
    storage[id] = todo;
    localStorage.setItem("todo", JSON.stringify(storage));
  }

  const popTodo = (id, todo) => {
    const storage = JSON.parse(localStorage.getItem("todo"));
    storage.splice(id, 1);
    localStorage.setItem("todo", JSON.stringify(storage));
  }

  export {
    storeValue,
    retrieve_storage_todo, 
    editStorage,
    popTodo
  }