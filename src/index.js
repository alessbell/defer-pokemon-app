import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/index.css";
import App from "./pages/App";
import Layout from "./layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Router /> */}
        <Route path="/" element={<App />} />
        <Route path="/deferred" element={<App deferred />} />
      </Route>
    </Routes>
  </Router>
);
