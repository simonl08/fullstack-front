import React from 'react';

const FaveList = ({movies}) => {
    return (
        <>
        {movies.map((movie, index)=> (
          <div>
            <img src ={movie.Poster} alt='movie'></img>
          </div>
        ))}
        </>
    )
}

export default FaveList;