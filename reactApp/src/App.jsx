import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data
    async function fetchData() {
      try {
        const response = await axios.get('/api/users');
        setUser(response.data[0].name);
        console.log(typeof(user));
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    // Call the async function to fetch data when the component mounts
    fetchData();
  }, [user]); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          User: {user}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
