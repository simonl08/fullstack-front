import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

//components
import Home from "./pages/Home";
import MovieDashboard from "./pages/MovieDashboard";
import { GenericStyle } from "./styles/Theme";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <GenericStyle />
      <Router>
        {!user ? (
          <Route exact path="/">
            <Home user={user} setUser={setUser} />
          </Route>
        ) : (
          <Redirect to="/dashboard" />
        )}
        {user ? (
          <Route path="/dashboard">
            <MovieDashboard user={user} setUser={setUser}/>
          </Route>
        ) : (
          <Redirect to="/" />
        )}
      </Router>
    </div>
  );
};

export default App;
