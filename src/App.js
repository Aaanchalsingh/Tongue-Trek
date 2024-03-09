import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import Page1 from './Page1';
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
    <>
      <Home />
      <Page1 />
    </>
  );
}

export default App;


