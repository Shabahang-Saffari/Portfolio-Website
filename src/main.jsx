import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Sass/index.scss";
import "react-toastify/dist/ReactToastify.css";

import { AppProvider } from "./Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
