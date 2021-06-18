import React from "react";
import "../dashboard/index.css"
import { MovieCards } from "../../styles/globalStyles"

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

const Movie = ({title, poster_path, overview, vote_average}) => (
    <MovieCards>
        <img src={IMGPATH + poster_path} alt={title} />
        <div className = "movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
            </span>
        </div>

        <div className="movieOver">
            <h2>Overview</h2>
            <p style={{fontWeight:100}}>{overview}</p>
        </div>
    </MovieCards>
);

export default Movie;