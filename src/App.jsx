import { useState } from "react";
import { NewTodoForm } from "../Components/NewTodoForm.jsx";
import { ToDolist } from "../Components/ToDolist.jsx";
import "../static/styles.css";

// Returning jsx element (React component)
function App() {
  // Using useState hooks to change the state of "todolist" (array of objects with id, title, completed attributes) 
  const [todoList, setTodoList] = useState([]);

  
  // Moved
  function addTodoItem(title) {
      // Define state as a function to take the current todoList and adds a new item to it
      // setTodoList moved out of handleSubmit function but passed to component NewTodoForm as props
      setTodoList(currentTodo => {
      return [...currentTodo, 
              // Creating a new object with id, title and completed attributes
              {id: crypto.randomUUID(), // using random ID generator (for ident in manipulation)
              title: title,              // using the input text
              completed: false}]        // setting the state of the checkbox
      })
  }

  // Function to toggle the state of the check-box
  function toggle_checkbox(id, completed) {
    // Define state as a function to take the current todoLis, updates and return the whole array 
    setTodoList(currentTodo => {
    return currentTodo.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed}
                }
                // Returning the todo even if not matched ID
                return todo;
                })
    })
  }

  // Function to delete an item from the list
  function delete_todo(id) {
      // console.log(todoList);
      // console.log("Delete todo with id: ", id);
      // Define state as a function to take the current todoList and filter out the item with the given id
      setTodoList(currentTodo => { 
      return currentTodo.filter(todo => todo.id !== id)
      })
  }

  return (
    <>
      {/* Using components NewTodoForm and passing function addTodoItem as props */}
      <NewTodoForm MyProps={addTodoItem} />
      <h1>TODOs list</h1>
      {/* Using components ToDolist and passing state todoList and functions as props */}
      <ToDolist 
        MyTodoProps={todoList}
        MyToggle={toggle_checkbox}
        MyDelete={delete_todo}
      />
    </>
  );
}

export default App;
