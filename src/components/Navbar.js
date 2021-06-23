import { Nav } from "../styles/globalStyles"
import { Link } from "react-router-dom";
import { useState } from "react";

import WatchListPopup from "./WatchListPopup";
import AddFavourite from "../components/dashboard/AddFavourites";
import Movie from "../components/dashboard/Movie";
import { MovieContainer } from "../styles/globalStyles";

export default function Navbar({ user, setUser, favorites, handleFavouritesClick }) {
  const [buttonPopup, setButtonPopup] = useState(false)
  
  const logoutHandler = () => {
    setUser("");
  };

  return (
    <Nav>   
      <ul><Link to="/dashboard">Movie List</Link></ul>
      {/* <ul><Link to="/watchlist">Watchlist</Link></ul> */}
      <ul className="watchlist" onClick={() => setButtonPopup(true)}>WatchList</ul>
      <ul>Hello {user}</ul>
      <button onClick={() => logoutHandler()}>Logout</button>
      <WatchListPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <MovieContainer>
        {favorites ? favorites.length > 0 &&
          favorites.map((movie) => <Movie key={movie.id} {...movie} movie={movie} handleFavouritesClick ={handleFavouritesClick} AddFavourite={AddFavourite}/>):""}
        </MovieContainer>
    </WatchListPopup>
    </Nav>
  );
}
