import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// import App from "./tutorial-1/App";
// import App from "./tutorial-2/App";
// import App from "./tutorial-3/App";
// import App from "./tutorial-4/App";
// import App from "./tutorial-6/App";
// import App from "./tutorial-7/App";
// import App from "./multistep-registration-form/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
