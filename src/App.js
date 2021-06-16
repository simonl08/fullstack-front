import React, { useState } from 'react';

//components
import Home from './pages/Home';
import MovieDashboard from './pages/MovieDashboard';
import { GenericStyle } from './styles/Theme';

const App = () => {
  const [user, setUser] = useState("");

  return (    
    <div className="App">
      <GenericStyle/>
        {/* <Home setUser={setUser}/> */}
        <MovieDashboard/>
    </div>

  );
};

export default App;
