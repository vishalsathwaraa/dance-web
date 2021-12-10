import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Suspense
      fallback={
        <div class="flex bg-black h-screen justify-center items-center">
          <div class="animate-spin rounded-full h-20 w-20 border-b-2 border-white-900"></div>
        </div>
      }
    >
      <App />
    </Suspense>
  </Router>,
  document.getElementById("root")
);
