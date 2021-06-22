import Navbar from "../components/Navbar";
// import FaveList from "../components/dashboard/FaveList";
import AddFavourite from "../components/dashboard/AddFavourites";
import Movie from "../components/dashboard/Movie";
import { MovieContainer } from "../styles/globalStyles";

export default function WatchList({setUser, user, movies, setMovies, favorites, setFavourites, handleFavouritesClick}) {
    return (
        <>
        <Navbar setUser={setUser} user={user} />
        <h1>WatchList</h1>

        <MovieContainer>
        {favorites ? favorites.length > 0 &&
          favorites.map((movie) => <Movie key={movie.id} {...movie} movie={movie} handleFavouritesClick ={handleFavouritesClick} AddFavourite={AddFavourite}/>):""}
        </MovieContainer>
        
          {/* <FaveList movies={favorites}/> */}
        </>
    );
  }