import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'


function App() {

  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);
  
  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 3);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setItems(data));
    return () => {
      console.log("cleanup");
    }
  }, [])

  return (
    <div className="App">
      <h1>Load More / Pagination</h1>
      <div className="container">
        {items.slice(0, visible).map(item => (
          <div className="card">
            <div className="id">
              <span>{item.id}</span>
            </div>
            <p>{item.body}</p>
          </div>
        ))}
        <button onClick={showMoreItems} >Show More</button>
      </div>
    </div>
  );
}

export default App;
