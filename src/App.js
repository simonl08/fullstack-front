import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';

const App = () => {
  const [user, setUser] =useState();


  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
