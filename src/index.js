import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { AuthContextProvider } from "./Auth/AuthContext";
import "./index.css";
import "./input.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <ScrollToTop />
      <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
