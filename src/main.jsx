import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FriendProvider from "./context/FriendContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FriendProvider>
      <App />
    </FriendProvider>
  </React.StrictMode>
);
