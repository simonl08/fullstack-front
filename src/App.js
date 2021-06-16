import React, { useState } from 'react';
import Home from './pages/Home';
import { GenericStyle } from './styles/Theme';

const App = () => {
  const [user, setUser] = useState("");

  return (    
    <div className="App">
      <GenericStyle/>
        <Home setUser={setUser}/>
    </div>

  );
};

export default App;
