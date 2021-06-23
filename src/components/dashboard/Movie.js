import "../dashboard/index.css"
import { MovieCards } from "../../styles/globalStyles"
import noImage from "../../images/imageErr.jpg"

  // Movie card
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  const setVoteClass = (vote) => {
      if (vote >= 8) {
          return "green";
      } else if (vote >= 6) {
          return "orange";
      } else {
          return "red";
      }
  };

  const Movie = ({title, poster_path, overview, vote_average, AddFavourite, movie, handleFavouritesClick}) => (
      <MovieCards>
          {poster_path === null ? 
          <img src={noImage} alt={title} />:
          <img src={IMGPATH + poster_path} alt={title} />}
          <div className = "movie-info">
            <div onClick={() => handleFavouritesClick(movie)}>
              <AddFavourite/>
            </div>
              <h3>{title}</h3>
              <div className="rating">
                  <span className={`tag ${setVoteClass(vote_average)}`}>
                  {vote_average}
                  </span>
              </div>        
          </div>
            
          <div className = "movieOver">
              <h2>Overview</h2>
              <p>{overview}</p>
          </div>
      </MovieCards>
  );

export default Movie;