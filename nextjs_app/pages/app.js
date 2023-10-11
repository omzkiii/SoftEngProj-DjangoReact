import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function app() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data
    async function fetchData() {
      try {
        const response = await axios.get('/api/geo123');
        setUser(response.data.name);
        console.log(typeof(user));
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    // Call the async function to fetch data when the component mounts
    fetchData();
  }, [user]); 
  

  return (
    <div>
      <header>
        <h1>
          User: {user}
        </h1>
      </header>
    </div>
  );
}

