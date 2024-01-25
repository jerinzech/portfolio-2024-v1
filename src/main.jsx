import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage";
import LoadingPage from "./LoadingPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomePage />
    {/* <LoadingPage /> */}
  </React.StrictMode>
);
