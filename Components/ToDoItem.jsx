import { useState } from 'react';

export function ToDoItem({ id, title, completed, MyToggle, MyDelete }) {

    return (
        <li>
        <label>
          {/* LABEL */}
          <input 
            type="checkbox" 
            checked={completed}
            // calling toggle_checkbox function to update the state of "completed"
            // hence, it needs the current state of "completed" (after the action occured !!!)
            onChange={(event) => MyToggle(id, event.target.completed)}
          />
          {/* TODO string */}
          {title}
        </label>
        {/* BUTTON */}
        <button className="btn btn-danger" 
        // passing the function, not the result of the function                    
        onClick={(event) => MyDelete(id) }
        >Delete</button>
      </li>
    )
}