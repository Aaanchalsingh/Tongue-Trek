import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pge2 from "./Pge2.jsx";
import Root from "./Root.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/page2" element={<Pge2 />} />
      </Routes>
    </Router>
  );
}

export default App;
