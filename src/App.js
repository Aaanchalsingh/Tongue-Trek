import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
function App() {
  // eslint-disable-next-line
  const [apiResponse, setAPIResponse]=useState("");

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI=() => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setAPIResponse(res))
      .catch(error => console.log(error)); // Handle any errors
  };
  return (
    <Home />
  );
}

export default App;


