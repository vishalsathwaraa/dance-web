import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Loader } from "./component/Loader";

ReactDOM.render(
  <Router>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </Router>,
  document.getElementById("root")
);
