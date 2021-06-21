import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';

import Movie from "./Movie";
import "../dashboard/index.css";
import Pagination from "./Pagination";
import { Container, Header, SearchInput, MovieContainer, FormSearchbox } from "../../styles/globalStyles";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalResults, setTotalResults] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  //test
  // const [pageNumber, setPageNumber] = useState(1)
  // const pagesVisited = pageNumber * movies

  useEffect(() => {
    trendingMovies(APIURL)
  }, []);

  const trendingMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
        setTotalResults(data.total_results)
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCHAPI + searchTerm);
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const nextPage = (pageNumber) => {
    if (searchTerm) {
      getMovies(SEARCHAPI + searchTerm +`&page=${pageNumber}`);
      setCurrentPage(pageNumber)
    }
  }
  const numberPages = Math.floor(totalResults / 20);

  //test
  // const pageCount = Math.ceil(totalResults / 20)
  // const changePage = ({selected}) => {
  //   setPageNumber(selected)
  // }
  
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
      {/* <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={numberPages}
        onPageChange={currentPage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledeClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      /> */}
      { totalResults > 20 ? <Pagination pages={numberPages} nextPage={nextPage} currentPage={currentPage}/> : ''}
      </Container>
    </>
  );
};

export default MovieList;