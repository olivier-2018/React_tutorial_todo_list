import { useState } from "react";

// NewTodoForm component with props
// props.MyProps is a function that takes a string as input 
export function NewTodoForm(props) {
    // State for text capture
    const [item, setItem] = useState(""); 

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // stop form from reloading page when submit button clicked. 
        props.MyProps(item); // Call the addTodoItem function (passed via props) with the text input
        setItem(""); // Clear the input box after submitting
    }

    return (        
        // FORM for text capture 
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                {/* LABEL */}
                <label htmlFor="item">Input a new item</label>
                {/* TEXT INPUT  */}
                    <input
                        value={item} // Binding text input value to the state of "item"
                        // Note: onChange is called everytime something changes in text box
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
    )
}
