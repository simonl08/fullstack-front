import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

//components
import "../dashboard/index.css";
import { Container, Header, SearchInput, MovieContainer, FormSearchbox} from "../../styles/globalStyles";
import CustomPagination from "./Pagination";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [maxPages, setMaxPages] = useState();

  useEffect(() => {
    trendingMovies();
    // eslint-disable-next-line 
    searchMovies();
    // eslint-disable-next-line 
  }, [page]);
  
  const trendingMovies = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${page}`
    );
    console.log(data)
    setMovies(data.results);
    setMaxPages(data.total_pages);
  };

  const searchMovies = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${searchTerm}&page=${page}`
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
    <Container>
      <Header>
        <FormSearchbox onSubmit={handleOnSubmit}>
          <SearchInput
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </FormSearchbox>
      </Header>
      <MovieContainer>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </MovieContainer>
      {maxPages > 1 &&
      <CustomPagination setPage={setPage} maxPages={maxPages}/>
    }
    </Container>
   </>
  );

};

export default MovieList;