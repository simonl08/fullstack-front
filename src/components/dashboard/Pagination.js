import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { PaginationContainer } from "../../styles/globalStyles";

const CustomPagination = ({ setPage, setTrendingPage, searchTerm, paginationCurrent, maxPages = 10}) => {
    
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  const handleTrendPageChange = (trendingPage) => {
    setTrendingPage(trendingPage);
    window.scroll(0, 0);
  };
  

  return (
    <PaginationContainer>
        <Pagination
          color="primary"
          size="large"
          onChange={(e) => { searchTerm ? handlePageChange(e.target.textContent): handleTrendPageChange(e.target.textContent)}}
          count={maxPages}
          // page={paginationCurrent}
        />
    </PaginationContainer>
    )}

export default CustomPagination;