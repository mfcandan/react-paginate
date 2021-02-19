import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'


function App() {

  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => console.log(data));
    return () => {
      console.log("cleanup");
    }
  }, [])

  return (
    <div className="App">
      <h1>Load More / Pagination</h1>
    </div>
  );
}

export default App;
