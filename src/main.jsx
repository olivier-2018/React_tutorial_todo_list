import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Getting the root element and  rendering the App component inside of it 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
