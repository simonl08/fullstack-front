import React, { useState } from 'react';
import './App.css';
import { signup } from './utils';

const App = () => {
  const [user, setUser] =useState();


  return (
    <div className="App">
      <login/>
    </div>
  );
}

export default App;
