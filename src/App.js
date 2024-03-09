import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
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
  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');
  const [loginStatus, setLoginStatus]=useState('');

  const handleLogin=() => {
    if (username==='admin'&&password==='admin') {
      setLoginStatus('Login successful');
    } else {
      setLoginStatus('Invalid username or password');
    }
  };

  return (
    <center>
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p className="App-intro">{apiResponse}</p>
      </div>
    </center>
  );
}

export default App;


