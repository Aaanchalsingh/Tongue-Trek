import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pge2 from "./Pge2";
import root from "./Root";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={root} />
        <Route path="/page2" component={Pge2} />
      </Routes>
    </Router>
  );
}

export default App;
