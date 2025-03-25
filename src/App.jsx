import { useState } from "react";
import "./styles.css";

// Returning jsx element (React component)
function App() {
  // Using useState hooks to change the state of "item" (string)
  const [item, setItem] = useState("");
  // Using useState hooks to change the state of "todolist" (array of objects with id, title, completed attributes) 
  const [todoList, setTodoList] = useState([]);

  function handleSubmit(event) {
    // event.preventDefault() called to stop the form from reloading the page when the submit button is clicked. 
    // This allows to handle the form data without interrupting the user's experience 
    event.preventDefault();

    // Define state as a function to take the current todoList and adds a new item to it
    setTodoList(currentTodo => {
      return [...currentTodo, 
              // Creating a new object with id, title and completed attributes
              {id: crypto.randomUUID(), // using random ID generator (for ident in manipulation)
              title: item,              // using the input text
              completed: false}]        // setting the state of the checkbox

    })

    setItem(""); // Clear the input box after submitting
    
    console.log(todoList); // warning, this return the previous state of todoList 
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
    console.log(todoList);
    console.log("Delete todo with id: ", id);
    // Define state as a function to take the current todoList and filter out the item with the given id
    setTodoList(currentTodo => { 
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      {/* FORM for text capture  */}
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          {/* LABEL */}
          <label htmlFor="item">Input a new item</label>
          {/* TEXT INPUT  */}
          <input
            value={item} // Binding text input value to the state of "item"
            // onChange is called everytime something changes in text box
            // onChange does 2 things:
            //  - calls the setItem function to update the state "item"
            //  - re-render the whole component
            onChange={(event) => setItem(event.target.value)}             
            type="text"
            id="item"
          />
          {/* BUTTON  */}
          <button className="btn">Add</button>
        </div>
      </form>

      <h1>TODO list</h1>
      
      {/* Creating List of components  */}
      <ul className="list">
        {/* Short-shortening */}
        {todoList.length === 0 && <li>No items in the list</li>}
        {/* mapping each array element */}
        {todoList.map((mytodo) => (
          // Need a key to uniquely identify each list item
          <li key={mytodo.id}>
            <label>
              {/* LABEL */}
              <input 
                type="checkbox" 
                checked={mytodo.completed}
                // calling toggle_checkbox function to update the state of "completed"
                // hence, it needs the current state of "completed" (after the action occured !!!)
                onChange={(event) => toggle_checkbox(mytodo.id, event.target.completed)}
              />
              {/* TODO string */}
              {mytodo.title}
            </label>
            {/* BUTTON */}
            <button className="btn btn-danger" 
                    onClick={(event) => delete_todo(mytodo.id) // passing the function, not the result of the function                    
                    }>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
