import React, {useState} from 'react';
//components
import MovieList from '../components/dashboard/MovieList';
import Navbar from '../components/Navbar'

export default function MovieDashboard({user, setUser}) {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavourites] = useState([]);

    const AddFaveMovie = (movie) => {
      const newFavouriteList = [...favorites, movie];
      setFavourites(newFavouriteList);
    };

    const RemoveFaveMovie = (movie) => {
      const newFavouriteList = favorites.filter(
        (favorites) => favorites.id !== movie.id
      );
      setFavourites(newFavouriteList);
    };

  return (
      <>
        <Navbar setUser={setUser} user={user} favorites={favorites} handleFavouritesClick={RemoveFaveMovie} />
        <MovieList movies={movies}setMovies={setMovies} favorites={favorites} setFavourites={setFavourites} handleFavouritesClick={AddFaveMovie} AddFaveMovie={AddFaveMovie}/>
      </>
    );
}