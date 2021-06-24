import React, { useEffect, useState } from "react";
import axios from "axios";

//components
import "../dashboard/index.css";
import Movie from "./Movie";
import CustomPagination from "./Pagination";
import AddFavourite from "./AddFavourites.js";
import { Container, Header, SearchInput, FormSearchbox} from "../../styles/globalStyles";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieList = ({movies, setMovies, favorites, setFavourites, handleFavouritesClick, AddFaveMovie}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [trendingPage, setTrendingPage] = useState(1);
  const [maxPages, setMaxPages] = useState();
  // const [paginationCurrent, setPaginationCurrent] = useState(1)

  useEffect(() => {
    // eslint-disable-next-line 
    trendingMovies()
    // eslint-disable-next-line 
    searchMovies()
  }, [page, trendingPage]);
  
  //Fetch API requests
  const trendingMovies = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${trendingPage}`
    );
    console.log(data)
    setMovies(data.results);
    setMaxPages(data.total_pages);
  };

  const searchMovies = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/search/movie?/id/videos&api_key=${API_KEY}&query=${searchTerm}&page=${page}`
    );
    setMovies(data.results);
    setMaxPages(data.total_pages);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      searchMovies();
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Header>
        <FormSearchbox onSubmit={handleOnSubmit}>
          <SearchInput
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </FormSearchbox>
          <button onClick={() => trendingMovies()}>Reset</button>
      </Header>
    <Container>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} movie={movie} handleFavouritesClick ={AddFaveMovie} AddFavourite={AddFavourite}/>)}
      {maxPages > 1 &&
      <CustomPagination setPage={setPage} maxPages={maxPages} setTrendingPage={setTrendingPage} searchTerm={searchTerm} />
    }
    </Container>
   </>
  );

};

export default MovieList;