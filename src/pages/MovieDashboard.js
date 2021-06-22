import React, {useState} from 'react';
//components
import MovieList from '../components/dashboard/MovieList';
import Navbar from '../components/Navbar'

import AddFavourite from "../components/dashboard/AddFavourites";
import Movie from "../components/dashboard/Movie";
import { MovieContainer } from "../styles/globalStyles";

export default function MovieDashboard({user, setUser}) {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavourites] = useState([]);

    const handleFavouritesClick = (movie) => {
      const newFavouriteList = [...favorites, movie];
      setFavourites(newFavouriteList);
    };

  return (
      <>
        <Navbar setUser={setUser} user={user} movies={movies}setMovies={setMovies} favorites={favorites} setFavourites={setFavourites} handleFavouritesClick={handleFavouritesClick} />
        <MovieList movies={movies}setMovies={setMovies} favorites={favorites} setFavourites={setFavourites} handleFavouritesClick={handleFavouritesClick}/>
        
        
        {/* <MovieContainer>
        {favorites ? favorites.length > 0 &&
          favorites.map((movie) => <Movie key={movie.id} {...movie} movie={movie} handleFavouritesClick ={handleFavouritesClick} AddFavourite={AddFavourite}/>):""}
        </MovieContainer> */}
      </>
    );
}