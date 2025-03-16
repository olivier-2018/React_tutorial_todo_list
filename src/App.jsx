import { useState } from "react";
import "./styles.css";

function App() {
  const [item, setItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("New item:", item);
  }
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input
            value={item}
            onChange={(event) => setItem(event.target.value)}
            type="text"
            id="item"
          />
          <button className="btn">Add</button>
        </div>
      </form>
      <h1>TODO list</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Buy milk
          </label>
          <button className="btn">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Buy potatoes
          </label>
          <button className="btn">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
