import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import HouseProvider from "./components/HouseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <HouseProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      
    </HouseProvider>
  </Router>
);
