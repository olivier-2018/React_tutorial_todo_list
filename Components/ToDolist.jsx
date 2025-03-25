import { useState } from "react";
import { ToDoItem } from "../Components/ToDoItem.jsx";

// ToDolist component with props
// however the passed props is destructured so can use the props name directly
export function ToDolist ({ MyTodoProps, MyToggle, MyDelete }) {

  return (            
    // Creating List of components 
    <ul className="list">
       {/* Short-shortening */}
      {MyTodoProps.length === 0 && <li>No items in the list</li>}
      {/* mapping each array element */}
      {MyTodoProps.map((mytodo) => (
        // Need a key to uniquely identify each list item
        // Spreading all items from mytodo object with {...mytodo}
        // equivalent to id={mytodo.id} title={mytodo.title} completed={mytodo.completed}
        <ToDoItem 
          {...mytodo} 
          MyToggle={MyToggle} 
          MyDelete={MyDelete} 
        />

      ))}
    </ul>
  )
}